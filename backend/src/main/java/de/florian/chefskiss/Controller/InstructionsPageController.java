package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeInstructionsDto;
import de.florian.chefskiss.Services.RecipeInstructionsService;
import java.util.Optional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/instructions")
public class InstructionsPageController {

    private final RecipeInstructionsService recipeInstructionsService;

    public InstructionsPageController(RecipeInstructionsService recipeInstructionsService) {
        this.recipeInstructionsService = recipeInstructionsService;
    }

    @GetMapping("/")
    public @ResponseBody Optional<RecipeInstructionsDto> getRecipe(@RequestParam(name = "id") int id) {
        return recipeInstructionsService.findById(id);
    }
}
