package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Services.CategoryService;
import de.florian.chefskiss.Services.RecipeService;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    private final RecipeService recipeService;
    private final CategoryService categoryService;

    public SearchController(RecipeService recipeService, CategoryService categoryService) {
        this.recipeService = recipeService;
        this.categoryService = categoryService;
    }

    @GetMapping(path = "/recipes")
    public @ResponseBody List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @PostMapping(path = "/recipes/add")
    public @ResponseBody Recipe addNewRecipe(@RequestParam String title, @RequestParam String[] categories) {
        Set<Category> categorySet = new HashSet<>();
        for (String category : categories) {
            Category categoryEntity = categoryService.getCategoryByName(category).orElseThrow();
            categorySet.add(categoryEntity);
        }
        return recipeService.createRecipe(new Recipe(title, categorySet));
    }
}
