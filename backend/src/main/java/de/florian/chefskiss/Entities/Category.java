package de.florian.chefskiss.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Represents a category of recipes. Each category can be associated with multiple recipes.
 */
@Entity
@Table(name = "category")
public class Category {

    /**
     * The unique identifier of the category.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * The set of recipes associated with this category.
     * This relationship is mapped by the "categories" field in the Recipe entity.
     */
    @ManyToMany(mappedBy = "categories")
    @JsonBackReference
    private Set<Recipe> recipes = new HashSet<>();

    /**
     * The name of the category (e.g., "Desserts", "Main Course").
     */
    @Column(nullable = false)
    private String name;

    /**
     * Default constructor for the Category entity.
     */
    public Category() {}

    /**
     * Constructor for creating a Category with a name.
     *
     * @param name The name of the category.
     */
    public Category(String name) {
        this.name = name;
        this.recipes = new HashSet<>();
    }

    /**
     * Gets the unique identifier of the category.
     *
     * @return The category ID.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the unique identifier of the category.
     *
     * @param id The category ID.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the set of recipes associated with the category.
     *
     * @return The set of associated recipes.
     */
    public Set<Recipe> getRecipes() {
        return recipes;
    }

    /**
     * Sets the set of recipes associated with the category.
     *
     * @param recipes The set of associated recipes.
     */
    public void setRecipes(Set<Recipe> recipes) {
        this.recipes = recipes != null ? recipes : new HashSet<>();
    }

    /**
     * Gets the name of the category.
     *
     * @return The category name.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the category.
     *
     * @param name The category name.
     */
    public void setName(String name) {
        this.name = name;
    }
}
