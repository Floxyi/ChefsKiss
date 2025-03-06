package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.ImageDto;
import de.florian.chefskiss.Dto.RecipeSimilarDto;
import de.florian.chefskiss.Dto.RecipeTileDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Image;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Repositories.RecipeRepository;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

/**
 * Service class responsible for finding and displaying similar recipes.
 * It provides methods to fetch a recipe by ID and return its similar recipes.
 */
@Service
public class SimilarRecipesService {

    private final RecipeRepository recipeRepository;
    private final RecipeService recipeService;

    /**
     * Constructs the SimilarRecipesService with the required RecipeRepository and RecipeService.
     *
     * @param recipeRepository the repository used to manage recipe data
     * @param recipeService the service used to manage recipes and find similar recipes
     */
    public SimilarRecipesService(RecipeRepository recipeRepository, RecipeService recipeService) {
        this.recipeRepository = recipeRepository;
        this.recipeService = recipeService;
    }

    /**
     * Finds a recipe by its ID and returns its similar recipes.
     *
     * @param id the ID of the recipe to fetch
     * @return an Optional containing a RecipeSimilarDto if the recipe is found, or an empty Optional if not
     */
    public Optional<RecipeSimilarDto> findById(Integer id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(createRecipeSimilarDto(recipe.get()));
    }

    /**
     * Creates a RecipeSimilarDto from a Recipe entity.
     *
     * @param recipe the Recipe entity to transform
     * @return the created RecipeSimilarDto
     */
    private RecipeSimilarDto createRecipeSimilarDto(Recipe recipe) {
        List<ImageDto> imageDtos = recipe
            .getImages()
            .stream()
            .sorted(Comparator.comparing(Image::getId))
            .map(image -> new ImageDto(image.getType(), image.getData()))
            .toList();

        List<RecipeTileDto> similarRecipes = recipeService.findSimilarRecipes(recipe, 5);

        return new RecipeSimilarDto(
            recipe.getId(),
            recipe.getTitle(),
            recipe.getDifficulty().name(),
            recipe.getTime().name(),
            recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet()),
            imageDtos,
            similarRecipes
        );
    }
}
