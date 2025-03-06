package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.CategoriesDto;
import de.florian.chefskiss.Dto.RecipeTileDto;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import de.florian.chefskiss.Services.CategoryService;
import de.florian.chefskiss.Services.RecipeService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
public class SearchPageController {

    private final RecipeService recipeService;
    private final CategoryService categoryService;

    public SearchPageController(RecipeService recipeService, CategoryService categoryService) {
        this.recipeService = recipeService;
        this.categoryService = categoryService;
    }

    @GetMapping
    public ResponseEntity<List<RecipeTileDto>> getRecipes(
        @RequestParam(required = false) String category,
        @RequestParam(required = false) Difficulty difficulty,
        @RequestParam(required = false) Time time,
        @RequestParam(required = false) String q
    ) {
        try {
            List<RecipeTileDto> recipes;
            if (category == null && difficulty == null && time == null && q == null) {
                recipes = recipeService.findAllRecipes();
            } else {
                recipes = recipeService.findRecipes(category, difficulty, time, q);
            }
            return recipes.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(recipes);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping(path = "/categories")
    public ResponseEntity<List<CategoriesDto>> getAllCategories() {
        try {
            List<CategoriesDto> categories = categoryService.findAllCategories();
            return categories.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(categories);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
