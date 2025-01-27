package de.florian.chefskiss.services;

import de.florian.chefskiss.dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.dto.CategoryWithRecipesDto;
import de.florian.chefskiss.repositories.CategoryRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryWithRecipesDto> findCategoriesWithRecipes() {
        return categoryRepository.findCategoriesWithRecipes();
    }

    public List<CategoryWithRecipeCountDto> findCategoriesWithRecipeCount() {
        return categoryRepository.findCategoriesWithRecipeCount();
    }
}
