package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Dto.RecipeTileDto;
import de.florian.chefskiss.Services.CategoryService;
import de.florian.chefskiss.Services.RecipeService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller class for handling homepage-related requests.
 * Provides endpoints for fetching top categories and recommended recipes.
 */
@RestController
@RequestMapping("/api/homepage")
public class HomeController {

    private final CategoryService categoryService;
    private final RecipeService recipeService;

    /**
     * Constructor to initialize HomeController with CategoryService and RecipeService.
     *
     * @param categoryService The service for handling category-related operations.
     * @param recipeService The service for handling recipe-related operations.
     */
    public HomeController(CategoryService categoryService, RecipeService recipeService) {
        this.categoryService = categoryService;
        this.recipeService = recipeService;
    }

    /**
     * Endpoint to retrieve top categories with recipe count.
     *
     * @param amount The number of categories to retrieve.
     * @return ResponseEntity containing a list of CategoryWithRecipeCountDto.
     */
    @GetMapping(path = "/categories")
    public ResponseEntity<List<CategoryWithRecipeCountDto>> getTopCategoriesWithRecipes(
        @RequestParam(name = "amount") int amount
    ) {
        List<CategoryWithRecipeCountDto> categories = categoryService.findCategoriesWithRecipeCount(amount);
        return ResponseEntity.ok(categories);
    }

    /**
     * Endpoint to retrieve recommended recipes.
     *
     * @param amount The number of recommended recipes to retrieve.
     * @return ResponseEntity containing a list of RecipeTileDto.
     */
    @GetMapping(path = "/recipes")
    public ResponseEntity<List<RecipeTileDto>> getRecommendedRecipesWithRecipes(
        @RequestParam(name = "amount") int amount
    ) {
        List<RecipeTileDto> recipes = recipeService.findAmountOfRecipes(amount);
        return ResponseEntity.ok(recipes);
    }
}
