package de.florian.chefskiss.controller;

import de.florian.chefskiss.dto.RecipeDto;
import de.florian.chefskiss.entities.Recipe;
import de.florian.chefskiss.services.RecipeService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    private final RecipeService recipeService;

    public SearchController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public ResponseEntity<List<RecipeDto>> getRecipes(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            return ResponseEntity.ok(getRecipesByCategory(category));
        } else {
            return ResponseEntity.ok(getAllRecipes());
        }
    }

    private List<RecipeDto> getRecipesByCategory(String category) {
        return recipeService.findByCategory(category);
    }

    private List<RecipeDto> getAllRecipes() {
        return recipeService.getAllRecipes();
    }
}
