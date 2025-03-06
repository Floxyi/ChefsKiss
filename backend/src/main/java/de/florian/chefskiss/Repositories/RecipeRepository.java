package de.florian.chefskiss.Repositories;

import de.florian.chefskiss.Entities.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for performing CRUD operations on the {@link Recipe} entity.
 * This extends {@link JpaRepository} to provide basic CRUD operations and
 * {@link JpaSpecificationExecutor} to enable the use of specifications for dynamic queries.
 */
@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer>, JpaSpecificationExecutor<Recipe> {}
