package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.ImageDto;
import de.florian.chefskiss.Dto.RecipeInstructionsDto;
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
public class RecipeInstructionsService {

    private final RecipeRepository recipeRepository;

    public RecipeInstructionsService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public Optional<RecipeInstructionsDto> findById(Integer id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(createRecipeInstructionsDto(recipe.get()));
    }

    private RecipeInstructionsDto createRecipeInstructionsDto(Recipe recipe) {
        List<ImageDto> imageDtos = recipe
            .getImages()
            .stream()
            .sorted(Comparator.comparing(Image::getId))
            .map(image -> new ImageDto(image.getType(), image.getData()))
            .toList();

        return new RecipeInstructionsDto(
            recipe.getId(),
            recipe.getTitle(),
            recipe.getDifficulty().name(),
            recipe.getTime().name(),
            recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet()),
            recipe.getInstructions(),
            imageDtos
        );
    }
}
