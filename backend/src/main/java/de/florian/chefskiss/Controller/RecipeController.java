package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.NewRecipeRequest;
import de.florian.chefskiss.Dto.RecipeDto;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Services.RecipeService;
import de.florian.chefskiss.enums.Difficulty;
import de.florian.chefskiss.enums.Time;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/recipe")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/")
    public @ResponseBody Optional<RecipeDto> getRecipe(@RequestParam(name = "id") int id) {
        return recipeService.findById(id);
    }

    @PostMapping(value = "/create", consumes = "application/json")
    public Recipe createRecipe(@RequestBody NewRecipeRequest request) {
        Recipe recipe = new Recipe();
        recipe.setTitle(request.title());
        recipe.setDifficulty(Difficulty.valueOf(request.difficulty()));
        recipe.setTime(Time.valueOf(request.time()));
        return recipeService.saveRecipe(recipe);
    }
}
