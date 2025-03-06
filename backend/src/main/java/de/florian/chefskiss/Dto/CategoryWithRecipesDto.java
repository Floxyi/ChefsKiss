package de.florian.chefskiss.Dto;

import de.florian.chefskiss.Entities.Recipe;
import java.util.Set;

/**
 * Data Transfer Object (DTO) representing a category along with a set of recipes belonging to that category.
 * Contains the category's ID, name, and the associated recipes.
 */
public record CategoryWithRecipesDto(
    /**
     * The ID of the category.
     */
    Integer id,

    /**
     * The name of the category.
     */
    String name,

    /**
     * A set of recipes within this category.
     */
    Set<Recipe> recipes
) {}
