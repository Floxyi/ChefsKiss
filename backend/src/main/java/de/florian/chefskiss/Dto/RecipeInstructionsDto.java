package de.florian.chefskiss.Dto;

import java.util.List;
import java.util.Set;

public record RecipeInstructionsDto(
    Integer id,
    String title,
    String difficulty,
    String time,
    Set<String> categories,
    String instructions,
    List<ImageDto> images
) {}
