package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeSimilarDto;
import de.florian.chefskiss.Services.SimilarRecipesService;
import java.util.Optional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/similar")
public class SimilarPageController {

    private final SimilarRecipesService similarRecipesService;

    public SimilarPageController(SimilarRecipesService similarRecipesService) {
        this.similarRecipesService = similarRecipesService;
    }

    @GetMapping("/")
    public @ResponseBody Optional<RecipeSimilarDto> getRecipe(@RequestParam(name = "id") int id) {
        return similarRecipesService.findById(id);
    }
}
