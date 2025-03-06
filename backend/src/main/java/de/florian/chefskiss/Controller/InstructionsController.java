package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeInstructionsDto;
import de.florian.chefskiss.Services.RecipeInstructionsService;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller class for handling recipe instructions-related requests.
 * Provides an endpoint to retrieve instructions for a specific recipe.
 */
@RestController
@RequestMapping("/api/instructions")
public class InstructionsController {

    private final RecipeInstructionsService recipeInstructionsService;

    /**
     * Constructor to initialize InstructionsController with RecipeInstructionsService.
     *
     * @param recipeInstructionsService The service for handling recipe instructions.
     */
    public InstructionsController(RecipeInstructionsService recipeInstructionsService) {
        this.recipeInstructionsService = recipeInstructionsService;
    }

    /**
     * Endpoint to retrieve instructions for a specific recipe.
     *
     * @param id The ID of the recipe whose instructions are to be retrieved.
     * @return ResponseEntity containing the RecipeInstructionsDto if found,
     *         or a NOT_FOUND response if the recipe instructions are not found.
     */
    @GetMapping("/")
    public ResponseEntity<RecipeInstructionsDto> getRecipe(@RequestParam(name = "id") int id) {
        Optional<RecipeInstructionsDto> recipeInstructionsDto = recipeInstructionsService.findById(id);
        if (recipeInstructionsDto.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(recipeInstructionsDto.get());
    }
}
