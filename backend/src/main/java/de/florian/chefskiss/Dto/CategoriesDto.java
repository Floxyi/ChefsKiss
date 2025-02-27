package de.florian.chefskiss.Dto;

public class CategoriesDto {

    private String name;
    private Integer id;

    public CategoriesDto(String name, Integer id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }
}
