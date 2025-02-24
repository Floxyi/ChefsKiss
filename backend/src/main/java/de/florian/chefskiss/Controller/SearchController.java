package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.CategoriesDto;
import de.florian.chefskiss.Dto.RecipeDto;
import de.florian.chefskiss.enums.Difficulty;
import de.florian.chefskiss.enums.Time;
import de.florian.chefskiss.Services.CategoryService;
import de.florian.chefskiss.Services.RecipeService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    private final RecipeService recipeService;
    private final CategoryService categoryService;

    public SearchController(RecipeService recipeService, CategoryService categoryService) {
        this.recipeService = recipeService;
        this.categoryService = categoryService;
    }

    @GetMapping
    public ResponseEntity<List<RecipeDto>> getRecipes(
        @RequestParam(required = false) String category,
        @RequestParam(required = false) Difficulty difficulty,
        @RequestParam(required = false) Time time
    ) {
        List<RecipeDto> recipes;
        if (category == null && difficulty == null && time == null) {
            recipes = recipeService.findAllRecipes();
        } else {
            recipes = recipeService.findRecipes(category, difficulty, time);
        }
        return ResponseEntity.ok(recipes);
    }

    @GetMapping(path = "/categories")
    public @ResponseBody List<CategoriesDto> getAllCategories() {
        return categoryService.findAllCategories();
    }
}
