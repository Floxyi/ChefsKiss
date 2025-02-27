package de.florian.chefskiss.Dto;

import de.florian.chefskiss.Entities.Recipe;
import java.util.Set;

public record CategoryWithRecipesDto(Integer id, String name, Set<Recipe> recipes) { }
