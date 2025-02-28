package de.florian.chefskiss.Dto;

import java.util.List;
import java.util.Set;

public record RecipeSimilarDto(
    Integer id,
    String title,
    String difficulty,
    String time,
    Set<String> categories,
    List<ImageDto> images,
    List<RecipeTileDto> similarRecipes
) {}
