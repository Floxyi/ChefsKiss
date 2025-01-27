package de.florian.chefskiss.repositories;

import de.florian.chefskiss.entities.Recipe;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
    @Query("SELECT r FROM Recipe r JOIN r.categories c WHERE LOWER(c.name) = LOWER(:categoryName)")
    List<Recipe> findByCategoryName(@Param("categoryName") String categoryName);
}
