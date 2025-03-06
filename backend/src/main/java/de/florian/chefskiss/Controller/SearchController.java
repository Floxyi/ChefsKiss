package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeTileDto;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import de.florian.chefskiss.Services.RecipeService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller class for handling recipe search-related requests.
 * Provides an endpoint to search for recipes based on various filters.
 */
@RestController
@RequestMapping("/api/search")
public class SearchController {

    private final RecipeService recipeService;

    /**
     * Constructor to initialize SearchController with RecipeService.
     *
     * @param recipeService The service for handling recipe retrieval and search.
     */
    public SearchController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    /**
     * Endpoint to retrieve recipes based on the provided search parameters.
     * Supports filtering by category, difficulty, time, and search query.
     *
     * @param category  The category of the recipe (optional).
     * @param difficulty The difficulty level of the recipe (optional).
     * @param time The time required to prepare the recipe (optional).
     * @param q The search query string (optional).
     * @return ResponseEntity containing a list of RecipeTileDto matching the search criteria,
     *         or a NO_CONTENT response if no recipes are found, or INTERNAL_SERVER_ERROR in case of an exception.
     */
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
}
