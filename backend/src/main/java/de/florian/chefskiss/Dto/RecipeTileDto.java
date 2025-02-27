package de.florian.chefskiss.Dto;

import java.util.Set;

public record RecipeTileDto(Integer id, String title, String difficulty, String time, Set<String> categories) { }
