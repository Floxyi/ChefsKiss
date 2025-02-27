package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.NewRecipeRequest;
import de.florian.chefskiss.Dto.RecipeDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import de.florian.chefskiss.Services.CategoryService;
import de.florian.chefskiss.Services.RecipeService;
import java.util.Optional;
import java.util.Set;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recipe")
public class RecipeController {

    private final RecipeService recipeService;
    private final CategoryService categoryService;

    public RecipeController(RecipeService recipeService, CategoryService categoryService) {
        this.recipeService = recipeService;
        this.categoryService = categoryService;
    }

    @GetMapping("/")
    public @ResponseBody Optional<RecipeDto> getRecipe(@RequestParam(name = "id") int id) {
        return recipeService.findById(id);
    }

    @PostMapping(value = "/create", consumes = "application/json")
    public Recipe createRecipe(@RequestBody NewRecipeRequest request) {
        String title = request.title();
        Difficulty difficulty = Difficulty.valueOf(request.difficulty());
        Time time = Time.valueOf(request.time());
        Set<Category> categories = categoryService.findCategoriesByIds(request.categoryIds());
        Recipe recipe = new Recipe(title, difficulty, time, categories);
        return recipeService.saveRecipe(recipe);
    }
}
