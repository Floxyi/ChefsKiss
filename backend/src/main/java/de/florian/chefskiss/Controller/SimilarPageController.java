package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeSimilarDto;
import de.florian.chefskiss.Services.SimilarRecipesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/similar")
public class SimilarPageController {

    private final SimilarRecipesService similarRecipesService;

    public SimilarPageController(SimilarRecipesService similarRecipesService) {
        this.similarRecipesService = similarRecipesService;
    }

    @GetMapping("/")
    public ResponseEntity<RecipeSimilarDto> getRecipe(@RequestParam(name = "id") int id) {
        RecipeSimilarDto recipeSimilarDto = similarRecipesService.findById(id);
        if (recipeSimilarDto != null) {
            return ResponseEntity.ok(recipeSimilarDto);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
