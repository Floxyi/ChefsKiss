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
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public Recipe saveRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public List<RecipeTileDto> findAllRecipes() {
        List<Recipe> recipes = recipeRepository.findAll();

        return recipes.stream().map(recipe -> createRecipeTileDto(recipe)).collect(Collectors.toList());
    }

    public List<RecipeTileDto> findRecipes(String category, Difficulty difficulty, Time time) {
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

        return recipeRepository
            .findAll(specification)
            .stream()
            .map(recipe -> createRecipeTileDto(recipe))
            .collect(Collectors.toList());
    }

    public Optional<RecipeTileDto> findById(Integer id) {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
        if (optionalRecipe.isPresent()) {
            Recipe recipe = optionalRecipe.get();
            return Optional.of(createRecipeTileDto(recipe));
        } else {
            return Optional.empty();
        }
    }

    public List<RecipeTileDto> findAmountOfRecipes(Integer amount) {
        List<Recipe> recipes = recipeRepository.findAll(PageRequest.of(0, amount)).getContent();
        return recipes.stream().map(recipe -> createRecipeTileDto(recipe)).collect(Collectors.toList());
    }

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
