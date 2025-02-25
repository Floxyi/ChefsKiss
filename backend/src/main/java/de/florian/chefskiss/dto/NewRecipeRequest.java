package de.florian.chefskiss.Dto;

import java.util.Set;

public record NewRecipeRequest(
        String title,
        String difficulty,
        String time,
        Set<String> categories) {
}
