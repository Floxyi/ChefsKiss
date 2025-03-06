package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeSimilarDto;
import de.florian.chefskiss.Services.SimilarRecipesService;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller class for handling requests related to similar recipes.
 * Provides an endpoint to retrieve similar recipes based on a given recipe ID.
 */
@RestController
@RequestMapping("/api/similar")
public class SimilarRecipesController {

    private final SimilarRecipesService similarRecipesService;

    /**
     * Constructor to initialize SimilarRecipesController with SimilarRecipesService.
     *
     * @param similarRecipesService The service for handling similar recipe retrieval.
     */
    public SimilarRecipesController(SimilarRecipesService similarRecipesService) {
        this.similarRecipesService = similarRecipesService;
    }

    /**
     * Endpoint to retrieve similar recipes based on the provided recipe ID.
     *
     * @param id The ID of the recipe for which similar recipes are to be retrieved.
     * @return ResponseEntity containing the RecipeSimilarDto with similar recipes,
     *         or a NOT_FOUND response if no similar recipes are found, or INTERNAL_SERVER_ERROR in case of an exception.
     */
    @GetMapping("/")
    public ResponseEntity<RecipeSimilarDto> getRecipe(@RequestParam(name = "id") int id) {
        Optional<RecipeSimilarDto> recipeSimilarDto = similarRecipesService.findById(id);
        if (recipeSimilarDto.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(recipeSimilarDto.get());
    }
}
