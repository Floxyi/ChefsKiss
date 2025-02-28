package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeInstructionsDto;
import de.florian.chefskiss.Services.InstructionsPageService;
import java.util.Optional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/instructions")
public class InstructionsPageController {

    private final InstructionsPageService instructionsPageService;

    public InstructionsPageController(InstructionsPageService instructionsPageService) {
        this.instructionsPageService = instructionsPageService;
    }

    @GetMapping("/")
    public @ResponseBody Optional<RecipeInstructionsDto> getRecipe(@RequestParam(name = "id") int id) {
        return instructionsPageService.findById(id);
    }
}
