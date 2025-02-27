package de.florian.chefskiss.Controller;


import de.florian.chefskiss.Dto.RecipeCreationDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import de.florian.chefskiss.Services.CategoryService;
import de.florian.chefskiss.Services.ImageService;
import de.florian.chefskiss.Services.RecipeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/creation")
public class CreationPageController {

    private final ImageService imageService;
    private final CategoryService categoryService;
    private final RecipeService recipeService;

    public CreationPageController(RecipeService recipeService, ImageService imageService, CategoryService categoryService) {
        this.imageService = imageService;
        this.categoryService = categoryService;
        this.recipeService = recipeService;
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
    public Recipe createRecipe(@RequestBody RecipeCreationDto request) {
        String title = request.title();
        Difficulty difficulty = Difficulty.valueOf(request.difficulty());
        Time time = Time.valueOf(request.time());
        Set<Category> categories = categoryService.findCategoriesByIds(request.categoryIds());
        String instructions = request.instructions();

        Recipe recipe = new Recipe(title, difficulty, time, categories, instructions);

        return recipeService.saveRecipe(recipe);
    }
}
