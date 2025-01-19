package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping(path="")
    public @ResponseBody Iterable<Recipe> getAllRecipe() {
        return recipeService.getAllRecipes();
    }

    @PostMapping(path="/add")
    public @ResponseBody Recipe addNewRecipe (@RequestParam String title) {
        return recipeService.createRecipe(new Recipe(title));
    }
}
