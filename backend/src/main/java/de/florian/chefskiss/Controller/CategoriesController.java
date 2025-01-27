package de.florian.chefskiss.controller;

import de.florian.chefskiss.dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.services.CategoryService;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/categories")
public class CategoriesController {

    private final CategoryService categoryService;

    public CategoriesController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping(path = "/")
    public @ResponseBody List<CategoryWithRecipeCountDto> getCategoriesWithRecipes() {
        return categoryService.findCategoriesWithRecipeCount();
    }
}
