package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeInstructionsDto;
import de.florian.chefskiss.Services.RecipeInstructionsService;
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
        RecipeInstructionsDto recipeInstructionsDto = recipeInstructionsService.findById(id);
        return ResponseEntity.ok(recipeInstructionsDto);
    }
}
