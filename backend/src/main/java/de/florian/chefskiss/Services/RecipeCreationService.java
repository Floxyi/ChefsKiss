package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.RecipeCreationDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import java.util.Set;
import org.springframework.stereotype.Service;

@Service
public class RecipeCreationService {

    private final CategoryService categoryService;
    private final RecipeService recipeService;

    public RecipeCreationService(CategoryService categoryService, RecipeService recipeService) {
        this.categoryService = categoryService;
        this.recipeService = recipeService;
    }

    public Recipe createRecipe(RecipeCreationDto request) {
        try {
            String title = request.title();
            Difficulty difficulty = Difficulty.valueOf(request.difficulty());
            Time time = Time.valueOf(request.time());
            Set<Category> categories = categoryService.findCategoriesByIds(request.categoryIds());
            String instructions = request.instructions();

            Recipe recipe = new Recipe(title, difficulty, time, categories, instructions);
            return recipeService.saveRecipe(recipe);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid difficulty or time value: " + e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException("An error occurred while creating the recipe: " + e.getMessage());
        }
    }
}
