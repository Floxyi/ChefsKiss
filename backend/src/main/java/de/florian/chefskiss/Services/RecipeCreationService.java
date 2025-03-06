package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.RecipeCreationDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import java.util.Set;
import org.springframework.stereotype.Service;

/**
 * Service class for handling the creation of new recipes.
 * It takes a recipe creation request, processes it, and creates a new recipe entity.
 */
@Service
public class RecipeCreationService {

    private final CategoryService categoryService;
    private final RecipeService recipeService;

    /**
     * Constructor to initialize the RecipeCreationService with the necessary services.
     *
     * @param categoryService the service used to manage categories
     * @param recipeService the service used to manage recipes
     */
    public RecipeCreationService(CategoryService categoryService, RecipeService recipeService) {
        this.categoryService = categoryService;
        this.recipeService = recipeService;
    }

    /**
     * Creates a new recipe based on the provided recipe creation request.
     * It maps the request data into a Recipe entity, associates categories,
     * and returns the saved recipe.
     *
     * @param request the DTO containing recipe creation details
     * @return the created Recipe entity
     * @throws IllegalArgumentException if an invalid difficulty or time value is provided
     * @throws RuntimeException if an unexpected error occurs during recipe creation
     */
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
