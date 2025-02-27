package de.florian.chefskiss.Dto;

import java.util.Set;

public record RecipePageDto(Integer id, String title, String difficulty, String time, Set<String> categories, String instructions) { }

