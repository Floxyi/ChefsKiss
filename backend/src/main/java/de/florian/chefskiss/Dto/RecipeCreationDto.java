package de.florian.chefskiss.Dto;

import java.util.Set;

/**
 * Data Transfer Object (DTO) representing the necessary details for creating a recipe.
 */
public record RecipeCreationDto(
    /**
     * The title of the recipe.
     */
    String title,

    /**
     * The difficulty level of the recipe (e.g., "Easy", "Medium", "Hard").
     */
    String difficulty,

    /**
     * The preparation time for the recipe (e.g., "30 minutes", "1 hour").
     */
    String time,

    /**
     * A set of category IDs associated with the recipe.
     */
    Set<Integer> categoryIds,

    /**
     * The instructions for preparing the recipe.
     */
    String instructions
) {}
