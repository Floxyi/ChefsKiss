package de.florian.chefskiss.Repositories;

import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Entities.Category;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Repository interface for accessing and manipulating Category entities in the database.
 * Provides methods for querying categories and their associated recipe counts.
 */
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    /**
     * Finds categories along with the count of associated recipes.
     * The result is ordered by the recipe count in descending order.
     *
     * @param pageable pagination information to limit the number of results
     * @return a list of CategoryWithRecipeCountDto containing the category details and recipe counts
     */
    @Query(
        "SELECT new de.florian.chefskiss.Dto.CategoryWithRecipeCountDto(c.id, c.name, COUNT(r)) " +
        "FROM Category c LEFT JOIN c.recipes r " +
        "GROUP BY c.id, c.name " +
        "ORDER BY COUNT(r) DESC"
    )
    List<CategoryWithRecipeCountDto> findCategoriesWithRecipeCount(Pageable pageable);
}
