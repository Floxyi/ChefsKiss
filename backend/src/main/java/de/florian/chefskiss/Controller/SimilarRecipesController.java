package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeSimilarDto;
import de.florian.chefskiss.Services.SimilarRecipesService;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/similar")
public class SimilarRecipesController {

    private final SimilarRecipesService similarRecipesService;

    public SimilarRecipesController(SimilarRecipesService similarRecipesService) {
        this.similarRecipesService = similarRecipesService;
    }

    @GetMapping("/")
    public ResponseEntity<RecipeSimilarDto> getRecipe(@RequestParam(name = "id") int id) {
        Optional<RecipeSimilarDto> recipeSimilarDto = similarRecipesService.findById(id);
        if (recipeSimilarDto.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(recipeSimilarDto.get());
    }
}
