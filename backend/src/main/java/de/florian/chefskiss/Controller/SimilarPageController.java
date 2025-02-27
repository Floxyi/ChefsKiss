package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeTileDto;
import de.florian.chefskiss.Services.RecipeService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/similar")
public class SimilarPageController {

    private final RecipeService recipeService;

    public SimilarPageController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/")
    public @ResponseBody Optional<RecipeTileDto> getSimilarRecipes(@RequestParam(name = "id") int id) {
        return recipeService.findById(id);
    }
}
