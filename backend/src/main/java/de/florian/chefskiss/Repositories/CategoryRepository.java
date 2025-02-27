package de.florian.chefskiss.Repositories;

import de.florian.chefskiss.Dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.Entities.Category;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Query(
        "SELECT new de.florian.chefskiss.Dto.CategoryWithRecipeCountDto(c.id, c.name, COUNT(r)) " +
        "FROM Category c LEFT JOIN c.recipes r " +
        "GROUP BY c.id, c.name " +
        "ORDER BY COUNT(r) DESC"
    )
    List<CategoryWithRecipeCountDto> findCategoriesWithRecipeCount(Pageable pageable);
}
