package de.florian.chefskiss.controller;

import de.florian.chefskiss.dto.RecipeDto;
import de.florian.chefskiss.services.RecipeService;
import java.util.Optional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recipe")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping(path = "/")
    public @ResponseBody Optional<RecipeDto> getRecipe(@RequestParam(name = "id") int id) {
        return recipeService.findById(id);
    }
}
