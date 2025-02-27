package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipePageDto;
import de.florian.chefskiss.Services.InstructionsPageService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/instructions")
public class InstructionsPageController {

    private final InstructionsPageService instructionsPageService;

    public InstructionsPageController(InstructionsPageService instructionsPageService) {
        this.instructionsPageService = instructionsPageService;
    }

    @GetMapping("/")
    public @ResponseBody Optional<RecipePageDto> getRecipe(@RequestParam(name = "id") int id) {
        return instructionsPageService.findById(id);
    }
}
