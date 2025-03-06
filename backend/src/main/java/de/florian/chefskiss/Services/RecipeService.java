package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.ImageDto;
import de.florian.chefskiss.Dto.RecipeTileDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Image;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import de.florian.chefskiss.Repositories.RecipeRepository;
import de.florian.chefskiss.Specifications.RecipeSpecification;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

/**
 * Service class responsible for managing recipes and retrieving recipe data.
 * Provides methods to fetch, create, and filter recipes, as well as finding similar recipes.
 */
@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    /**
     * Constructs the RecipeService with the required RecipeRepository.
     *
     * @param recipeRepository the repository used to manage recipe data
     */
    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    /**
     * Saves a recipe to the database.
     *
     * @param recipe the recipe to save
     * @return the saved recipe
     */
    public Recipe saveRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    /**
     * Fetches all recipes from the database and returns them as RecipeTileDto.
     *
     * @return a list of RecipeTileDto objects
     */
    public List<RecipeTileDto> findAllRecipes() {
        List<Recipe> recipes = recipeRepository.findAll();

        return recipes.stream().map(this::createRecipeTileDto).collect(Collectors.toList());
    }

    /**
     * Fetches recipes based on category, difficulty, time, and search query.
     *
     * @param category the category of the recipe
     * @param difficulty the difficulty of the recipe
     * @param time the time required to prepare the recipe
     * @param q the search query for the recipe name
     * @return a list of filtered RecipeTileDto objects
     */
    public List<RecipeTileDto> findRecipes(String category, Difficulty difficulty, Time time, String q) {
        Specification<Recipe> specification = Specification.where(null);

        if (category != null && !category.isEmpty()) {
            specification = specification.and(RecipeSpecification.hasCategory(category));
        }
        if (difficulty != null) {
            specification = specification.and(RecipeSpecification.hasDifficulty(difficulty));
        }
        if (time != null) {
            specification = specification.and(RecipeSpecification.hasTime(time));
        }
        if (q != null && !q.isEmpty()) {
            specification = specification.and(RecipeSpecification.hasName(q));
        }

        return recipeRepository
            .findAll(specification)
            .stream()
            .map(this::createRecipeTileDto)
            .collect(Collectors.toList());
    }

    /**
     * Fetches a recipe by its ID and returns it as a RecipeTileDto.
     *
     * @param id the ID of the recipe to fetch
     * @return an Optional containing the RecipeTileDto if the recipe is found, or an empty Optional if not
     */
    public Optional<RecipeTileDto> findById(Integer id) {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
        if (optionalRecipe.isPresent()) {
            Recipe recipe = optionalRecipe.get();
            return Optional.of(createRecipeTileDto(recipe));
        } else {
            return Optional.empty();
        }
    }

    /**
     * Fetches a specified number of recipes from the database and returns them as RecipeTileDto.
     *
     * @param amount the number of recipes to fetch
     * @return a list of RecipeTileDto objects
     */
    public List<RecipeTileDto> findAmountOfRecipes(Integer amount) {
        List<Recipe> recipes = recipeRepository.findAll(PageRequest.of(0, amount)).getContent();
        return recipes.stream().map(this::createRecipeTileDto).collect(Collectors.toList());
    }

    /**
     * Finds similar recipes based on shared categories.
     *
     * @param targetRecipe the recipe to find similar recipes for
     * @param limit the maximum number of similar recipes to return
     * @return a list of similar RecipeTileDto objects
     */
    public List<RecipeTileDto> findSimilarRecipes(Recipe targetRecipe, int limit) {
        Set<Category> targetCategories = targetRecipe.getCategories();

        List<Recipe> similarRecipes = recipeRepository
            .findAll()
            .stream()
            .filter(recipe -> !recipe.getId().equals(targetRecipe.getId()))
            .filter(recipe -> !Collections.disjoint(recipe.getCategories(), targetCategories))
            .sorted(Comparator.comparingInt(recipe -> -countCommonCategories(recipe, targetCategories)))
            .limit(limit)
            .toList();

        return similarRecipes.stream().map(this::createRecipeTileDto).toList();
    }

    /**
     * Counts the number of common categories between a recipe and a set of target categories.
     *
     * @param recipe the recipe to compare
     * @param targetCategories the set of target categories to compare against
     * @return the number of common categories
     */
    private int countCommonCategories(Recipe recipe, Set<Category> targetCategories) {
        return (int) recipe.getCategories().stream().filter(targetCategories::contains).count();
    }

    /**
     * Creates a RecipeTileDto from a Recipe entity.
     *
     * @param recipe the Recipe entity to transform
     * @return the created RecipeTileDto
     */
    private RecipeTileDto createRecipeTileDto(Recipe recipe) {
        Optional<ImageDto> titleImageDto = recipe
            .getImages()
            .stream()
            .sorted(Comparator.comparing(Image::getId))
            .findFirst()
            .map(image -> new ImageDto(image.getType(), image.getData()));

        return new RecipeTileDto(
            recipe.getId(),
            recipe.getTitle(),
            recipe.getDifficulty().name(),
            recipe.getTime().name(),
            recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet()),
            titleImageDto
        );
    }
}
