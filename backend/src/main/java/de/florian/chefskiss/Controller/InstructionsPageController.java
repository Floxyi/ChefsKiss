package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeInstructionsDto;
import de.florian.chefskiss.Services.RecipeInstructionsService;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/instructions")
public class InstructionsPageController {

    private final RecipeInstructionsService recipeInstructionsService;

    public InstructionsPageController(RecipeInstructionsService recipeInstructionsService) {
        this.recipeInstructionsService = recipeInstructionsService;
    }

    @GetMapping("/")
    public ResponseEntity<RecipeInstructionsDto> getRecipe(@RequestParam(name = "id") int id) {
        Optional<RecipeInstructionsDto> recipeInstructionsDto = recipeInstructionsService.findById(id);
        if (recipeInstructionsDto.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(recipeInstructionsDto.get());
    }
}
