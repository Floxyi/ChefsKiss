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

@Service
public class SimilarPageService {

    private final RecipeRepository recipeRepository;
    private final RecipeService recipeService;

    public SimilarPageService(RecipeRepository recipeRepository, RecipeService recipeService) {
        this.recipeRepository = recipeRepository;
        this.recipeService = recipeService;
    }

    public Optional<RecipeSimilarDto> findById(Integer id) {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
        if (optionalRecipe.isPresent()) {
            Recipe recipe = optionalRecipe.get();
            return Optional.of(createRecipeSimilarDto(recipe));
        } else {
            return Optional.empty();
        }
    }

    private RecipeSimilarDto createRecipeSimilarDto(Recipe recipe) {
        List<ImageDto> imageDtos = recipe
            .getImages()
            .stream()
            .sorted(Comparator.comparing(Image::getId))
            .map(image -> new ImageDto(image.getType(), image.getData()))
            .toList();

        List<RecipeTileDto> similarRecipes = recipeService.findAmountOfRecipes(5);

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
