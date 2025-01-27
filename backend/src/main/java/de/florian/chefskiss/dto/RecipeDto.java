package de.florian.chefskiss.dto;

import java.util.Set;

public class RecipeDto {

    private Integer id;
    private String title;
    private Set<String> categories;

    public RecipeDto(Integer id, String title, Set<String> categories) {
        this.id = id;
        this.title = title;
        this.categories = categories;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<String> getCategories() {
        return categories;
    }

    public void setCategories(Set<String> categories) {
        this.categories = categories;
    }
}
