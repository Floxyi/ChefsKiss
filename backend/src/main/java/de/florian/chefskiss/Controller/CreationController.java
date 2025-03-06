package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.RecipeCreationDto;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Services.ImageService;
import de.florian.chefskiss.Services.RecipeCreationService;
import java.io.IOException;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/creation")
public class CreationController {

    private final ImageService imageService;
    private final RecipeCreationService recipeCreationService;

    public CreationController(ImageService imageService, RecipeCreationService recipeCreationService) {
        this.imageService = imageService;
        this.recipeCreationService = recipeCreationService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> handleImageUpload(
        @RequestParam("files") List<MultipartFile> files,
        @RequestParam("recipeId") Integer recipeId
    ) {
        try {
            for (MultipartFile file : files) {
                imageService.saveImage(file, recipeId);
            }
            return ResponseEntity.ok("Files uploaded successfully.");
        } catch (IOException | IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                "File upload failed: " + e.getMessage()
            );
        }
    }

    @PostMapping(value = "/create", consumes = "application/json")
    public ResponseEntity<?> createRecipe(@RequestBody RecipeCreationDto request) {
        try {
            Recipe savedRecipe = recipeCreationService.createRecipe(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedRecipe);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
