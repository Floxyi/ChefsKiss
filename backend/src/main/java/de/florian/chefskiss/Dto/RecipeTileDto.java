package de.florian.chefskiss.Dto;

import java.util.Optional;
import java.util.Set;

/**
 * Data Transfer Object (DTO) representing a recipe tile, which contains essential recipe information.
 */
public record RecipeTileDto(
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
     * An optional image associated with the recipe's title.
     */
    Optional<ImageDto> titleImage
) {}
