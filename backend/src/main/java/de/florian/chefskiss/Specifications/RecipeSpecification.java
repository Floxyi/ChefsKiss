package de.florian.chefskiss.Specifications;

import de.florian.chefskiss.Entities.Category;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;

public class RecipeSpecification {

    public static Specification<Recipe> hasCategory(String categoryName) {
        return (root, query, criteriaBuilder) -> {
            Join<Recipe, Category> categories = root.join("categories");
            return criteriaBuilder.equal(categories.get("name"), categoryName);
        };
    }

    public static Specification<Recipe> hasDifficulty(Difficulty difficulty) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("difficulty"), difficulty);
    }

    public static Specification<Recipe> hasTime(Time time) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("time"), time);
    }
}
