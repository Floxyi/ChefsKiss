package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Dto.RecipeTileDto;
import de.florian.chefskiss.Services.CategoryService;
import de.florian.chefskiss.Services.RecipeService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/homepage")
public class HomeController {

    private final CategoryService categoryService;
    private final RecipeService recipeService;

    public HomeController(CategoryService categoryService, RecipeService recipeService) {
        this.categoryService = categoryService;
        this.recipeService = recipeService;
    }

    @GetMapping(path = "/categories")
    public ResponseEntity<List<CategoryWithRecipeCountDto>> getTopCategoriesWithRecipes(
        @RequestParam(name = "amount") int amount
    ) {
        List<CategoryWithRecipeCountDto> categories = categoryService.findCategoriesWithRecipeCount(amount);
        return ResponseEntity.ok(categories);
    }

    @GetMapping(path = "/recipes")
    public ResponseEntity<List<RecipeTileDto>> getRecommendedRecipesWithRecipes(
        @RequestParam(name = "amount") int amount
    ) {
        List<RecipeTileDto> recipes = recipeService.findAmountOfRecipes(amount);
        return ResponseEntity.ok(recipes);
    }
}
