package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.CategoryWithRecipeCount;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Repositories.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryWithRecipeCount> getAllCategoriesWithRecipeCount() {
        List<Category> categories = (List<Category>) categoryRepository.findAll();

        return categories.stream()
                .map(category -> new CategoryWithRecipeCount(
                        category.getId(),
                        category.getName(),
                        category.getRecipes().size()
                ))
                .collect(Collectors.toList());
    }

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> getCategoryByName(String name) {
        return Optional.ofNullable(categoryRepository.findFirstByName(name));
    }
}
