package de.florian.chefskiss.Controller;

import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Services.CategoryService;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/categories")
public class CategoryPageController {

    private final CategoryService categoryService;

    public CategoryPageController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping(path = "/")
    public @ResponseBody List<CategoryWithRecipeCountDto> getCategoriesWithRecipes() {
        return categoryService.findCategoriesWithRecipeCount();
    }
}
