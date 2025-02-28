package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeSimilarDto;
import de.florian.chefskiss.Services.SimilarPageService;
import java.util.Optional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/similar")
public class SimilarPageController {

    private final SimilarPageService similarPageService;

    public SimilarPageController(SimilarPageService similarPageService) {
        this.similarPageService = similarPageService;
    }

    @GetMapping("/")
    public @ResponseBody Optional<RecipeSimilarDto> getRecipe(@RequestParam(name = "id") int id) {
        return similarPageService.findById(id);
    }
}
