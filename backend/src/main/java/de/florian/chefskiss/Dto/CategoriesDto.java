package de.florian.chefskiss.Dto;

/**
 * Data Transfer Object (DTO) representing a category.
 * Contains the category's name and ID.
 */
public record CategoriesDto(
    /**
     * The name of the category.
     */
    String name,

    /**
     * The ID of the category.
     */
    Integer id
) {}
