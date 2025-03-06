package de.florian.chefskiss.Specifications;

import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;

/**
 * Specification class used to build dynamic queries for filtering recipes.
 * Contains methods to filter recipes by category, difficulty, time, and title.
 */
public class RecipeSpecification {

    /**
     * Creates a specification to filter recipes by category name.
     *
     * @param categoryName the name of the category to filter by
     * @return a Specification for filtering recipes by category name
     */
    public static Specification<Recipe> hasCategory(String categoryName) {
        return (root, query, criteriaBuilder) -> {
            Join<Recipe, Category> categories = root.join("categories");
            return criteriaBuilder.equal(categories.get("name"), categoryName);
        };
    }

    /**
     * Creates a specification to filter recipes by difficulty.
     *
     * @param difficulty the difficulty level to filter by
     * @return a Specification for filtering recipes by difficulty
     */
    public static Specification<Recipe> hasDifficulty(Difficulty difficulty) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("difficulty"), difficulty);
    }

    /**
     * Creates a specification to filter recipes by time.
     *
     * @param time the time required to prepare the recipe to filter by
     * @return a Specification for filtering recipes by time
     */
    public static Specification<Recipe> hasTime(Time time) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("time"), time);
    }

    /**
     * Creates a specification to filter recipes by name.
     *
     * @param name the name of the recipe to filter by
     * @return a Specification for filtering recipes by title name
     */
    public static Specification<Recipe> hasName(String name) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("title"), "%" + name + "%");
    }
}
