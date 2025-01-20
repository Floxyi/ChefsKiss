package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Services.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoriesController {

    private final CategoryService categoryService;

    public CategoriesController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping(path = "")
    public @ResponseBody List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @PostMapping(path = "/add")
    public @ResponseBody Category addNewCategory(@RequestParam String name) {
        return categoryService.createCategory(new Category(name));
    }
}
