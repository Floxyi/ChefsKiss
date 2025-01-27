package de.florian.chefskiss.dto;

import de.florian.chefskiss.entities.Recipe;
import java.util.Set;

public class CategoryWithRecipesDto {

    private Integer id;
    private String name;
    private Set<Recipe> recipes;

    public CategoryWithRecipesDto(Integer id, String name, Set<Recipe> recipes) {
        this.id = id;
        this.name = name;
        this.recipes = recipes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(Set<Recipe> recipes) {
        this.recipes = recipes;
    }
}
