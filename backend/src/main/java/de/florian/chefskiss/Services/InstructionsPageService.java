package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.RecipePageDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Repositories.RecipeRepository;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class InstructionsPageService {

    private final RecipeRepository recipeRepository;

    public InstructionsPageService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public Optional<RecipePageDto> findById(Integer id) {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
        if (optionalRecipe.isPresent()) {
            Recipe recipe = optionalRecipe.get();
            return Optional.of(
                new RecipePageDto(
                    recipe.getId(),
                    recipe.getTitle(),
                    recipe.getDifficulty().name(),
                    recipe.getTime().name(),
                    recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet()),
                    recipe.getInstructions()
                )
            );
        } else {
            return Optional.empty();
        }
    }
}
