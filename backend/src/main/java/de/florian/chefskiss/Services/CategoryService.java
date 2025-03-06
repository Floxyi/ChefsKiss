package de.florian.chefskiss.Services;

import de.florian.chefskiss.Dto.CategoriesDto;
import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Repositories.CategoryRepository;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service class for managing categories.
 * Provides methods for retrieving category data, including categories with recipe counts
 * and all available categories.
 */
@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    /**
     * Constructor for initializing the CategoryService with the provided categoryRepository.
     *
     * @param categoryRepository the CategoryRepository to be used for accessing category data
     */
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    /**
     * Retrieves all categories with the count of associated recipes.
     *
     * @return a list of CategoryWithRecipeCountDto, representing categories and their recipe counts
     */
    public List<CategoryWithRecipeCountDto> findCategoriesWithRecipeCount() {
        return categoryRepository.findCategoriesWithRecipeCount(Pageable.unpaged());
    }

    /**
     * Retrieves a limited list of categories with the count of associated recipes.
     *
     * @param limit the maximum number of categories to retrieve
     * @return a list of CategoryWithRecipeCountDto, representing categories and their recipe counts
     */
    public List<CategoryWithRecipeCountDto> findCategoriesWithRecipeCount(int limit) {
        return categoryRepository.findCategoriesWithRecipeCount(PageRequest.of(0, limit));
    }

    /**
     * Retrieves all categories as CategoriesDto.
     *
     * @return a list of CategoriesDto, representing all categories
     */
    public List<CategoriesDto> findAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories
            .stream()
            .map(category -> new CategoriesDto(category.getName(), category.getId()))
            .collect(Collectors.toList());
    }

    /**
     * Finds categories by their IDs.
     *
     * @param categoryIds the set of category IDs to retrieve
     * @return a set of Category entities corresponding to the provided IDs
     */
    public Set<Category> findCategoriesByIds(Set<Integer> categoryIds) {
        return new HashSet<>(categoryRepository.findAllById(categoryIds));
    }
}
