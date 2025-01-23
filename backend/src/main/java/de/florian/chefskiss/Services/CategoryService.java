package de.florian.chefskiss.Services;

import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Repositories.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return (List<Category>) categoryRepository.findAll();
    }

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> getCategoryByName(String name) {
        return Optional.ofNullable(categoryRepository.findFirstByName(name));
    }
}
