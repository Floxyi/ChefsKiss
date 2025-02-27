package de.florian.chefskiss.Dto;

import java.util.Set;

public record RecipeCreationDto(
    String title,
    String difficulty,
    String time,
    Set<Integer> categoryIds,
    String instructions
) {}
