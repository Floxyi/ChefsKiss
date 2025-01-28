package de.florian.chefskiss.controller;

import de.florian.chefskiss.dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.services.CategoryService;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/homepage")
public class HomepageController {

    private final CategoryService categoryService;

    public HomepageController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping(path = "/")
    public @ResponseBody List<CategoryWithRecipeCountDto> getTopCategoriesWithRecipes(
        @RequestParam(name = "amount") int amount
    ) {
        return categoryService.findCategoriesWithRecipeCount(amount);
    }
}
