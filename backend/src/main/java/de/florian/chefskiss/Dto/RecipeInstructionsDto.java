package de.florian.chefskiss.Dto;

import java.util.List;
import java.util.Set;

/**
 * Data Transfer Object (DTO) representing the instructions for a specific recipe.
 */
public record RecipeInstructionsDto(
    /**
     * The unique identifier for the recipe.
     */
    Integer id,

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
     * A set of category names associated with the recipe.
     */
    Set<String> categories,

    /**
     * The detailed instructions for preparing the recipe.
     */
    String instructions,

    /**
     * A list of images associated with the recipe.
     */
    List<ImageDto> images
) {}
