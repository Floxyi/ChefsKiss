package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.CategoriesDto;
import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Services.CategoryService;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller class for handling requests related to categories.
 * Provides endpoints for fetching categories and their associated recipe counts.
 */
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final CategoryService categoryService;

    /**
     * Constructor to initialize CategoryController with a CategoryService.
     *
     * @param categoryService The CategoryService that provides category-related operations.
     */
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    /**
     * Endpoint to fetch all categories along with the count of associated recipes.
     *
     * @return ResponseEntity containing the list of categories with recipe count, or a no-content status if no categories are found.
     */
    @GetMapping(path = "/overview")
    public ResponseEntity<List<CategoryWithRecipeCountDto>> getCategoriesWithRecipes() {
        try {
            List<CategoryWithRecipeCountDto> categories = categoryService.findCategoriesWithRecipeCount();
            if (categories.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(categories);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    /**
     * Endpoint to fetch all categories.
     *
     * @return ResponseEntity containing the list of all categories, or a no-content status if no categories are found.
     */
    @GetMapping(path = "/list")
    public ResponseEntity<List<CategoriesDto>> getAllCategories() {
        try {
            List<CategoriesDto> categories = categoryService.findAllCategories();
            return categories.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(categories);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
