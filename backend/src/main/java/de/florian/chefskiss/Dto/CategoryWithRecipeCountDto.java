package de.florian.chefskiss.Dto;

public class CategoryWithRecipeCountDto {

    private Integer id;
    private String name;
    private Long recipeCount;

    public CategoryWithRecipeCountDto(Integer id, String name, Long recipeCount) {
        this.id = id;
        this.name = name;
        this.recipeCount = recipeCount;
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

    public Long getRecipeCount() {
        return recipeCount;
    }

    public void setRecipeCount(Long recipeCount) {
        this.recipeCount = recipeCount;
    }
}
