package de.florian.chefskiss.Dto;

/**
 * Data Transfer Object (DTO) representing a category along with the number of recipes in that category.
 * Contains the category's ID, name, and the count of recipes.
 */
public record CategoryWithRecipeCountDto(
    /**
     * The ID of the category.
     */
    Integer id,

    /**
     * The name of the category.
     */
    String name,

    /**
     * The count of recipes within this category.
     */
    Long recipeCount
) {}
