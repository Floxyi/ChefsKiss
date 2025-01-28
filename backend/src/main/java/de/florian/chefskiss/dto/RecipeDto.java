package de.florian.chefskiss.dto;

import java.util.Set;

public class RecipeDto {

    private Integer id;
    private String title;
    private String difficulty;
    private String time;
    private Set<String> categories;

    public RecipeDto(Integer id, String title, String difficulty, String time, Set<String> categories) {
        this.id = id;
        this.title = title;
        this.difficulty = difficulty;
        this.time = time;
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

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Set<String> getCategories() {
        return categories;
    }

    public void setCategories(Set<String> categories) {
        this.categories = categories;
    }
}
