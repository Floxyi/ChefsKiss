package de.florian.chefskiss.repositories;

import de.florian.chefskiss.dto.CategoryWithRecipeCountDto;
import de.florian.chefskiss.dto.CategoryWithRecipesDto;
import de.florian.chefskiss.entities.Category;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @EntityGraph(attributePaths = "recipes")
    @Query("SELECT c FROM Category c")
    List<CategoryWithRecipesDto> findCategoriesWithRecipes();

    @Query(
        "SELECT new de.florian.chefskiss.dto.CategoryWithRecipeCountDto(c.id, c.name, COUNT(r)) " +
        "FROM Category c LEFT JOIN c.recipes r " +
        "GROUP BY c.id, c.name " +
        "ORDER BY COUNT(r) DESC"
    )
    List<CategoryWithRecipeCountDto> findCategoriesWithRecipeCount(Pageable pageable);
}
