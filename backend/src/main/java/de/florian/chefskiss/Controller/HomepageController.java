package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Dto.RecipeDto;
import de.florian.chefskiss.Services.CategoryService;
import de.florian.chefskiss.Services.RecipeService;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/homepage")
public class HomepageController {

    private final CategoryService categoryService;
    private final RecipeService recipeService;

    public HomepageController(CategoryService categoryService, RecipeService recipeService) {
        this.categoryService = categoryService;
        this.recipeService = recipeService;
    }

    @GetMapping(path = "/categories")
    public @ResponseBody List<CategoryWithRecipeCountDto> getTopCategoriesWithRecipes(
        @RequestParam(name = "amount") int amount
    ) {
        return categoryService.findCategoriesWithRecipeCount(amount);
    }

    @GetMapping(path = "/recipes")
    public @ResponseBody List<RecipeDto> getRecommendedRecipesWithRecipes(@RequestParam(name = "amount") int amount) {
        return recipeService.findAmountOfRecipes(amount);
    }
}
