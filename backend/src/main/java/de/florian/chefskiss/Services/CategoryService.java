package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.CategoriesDto;
import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Dto.CategoryWithRecipesDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Repositories.CategoryRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
        return categoryRepository.findCategoriesWithRecipeCount(Pageable.unpaged());
    }

    public List<CategoryWithRecipeCountDto> findCategoriesWithRecipeCount(int limit) {
        return categoryRepository.findCategoriesWithRecipeCount(PageRequest.of(0, limit));
    }

    public List<CategoriesDto> findAllCategories() {
        List<Category> recipes = categoryRepository.findAll();
        return recipes.stream().map(category -> new CategoriesDto(category.getName())).collect(Collectors.toList());
    }
}
