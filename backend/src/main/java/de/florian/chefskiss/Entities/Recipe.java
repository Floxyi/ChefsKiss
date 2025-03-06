package de.florian.chefskiss.Entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import de.florian.chefskiss.Enums.Difficulty;
import de.florian.chefskiss.Enums.Time;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Represents a recipe, containing details like title, difficulty, time, categories, images, and instructions.
 * A recipe can belong to multiple categories and have multiple images associated with it.
 */
@Entity
@Table(name = "recipe")
public class Recipe {

    /**
     * The unique identifier of the recipe.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * The title of the recipe.
     */
    @Column(nullable = false)
    private String title;

    /**
     * The difficulty level of the recipe.
     * Uses the {@link Difficulty} enum to categorize the difficulty.
     */
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Difficulty difficulty;

    /**
     * The time required to prepare the recipe.
     * Uses the {@link Time} enum to categorize the time.
     */
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Time time;

    /**
     * The categories associated with this recipe.
     * A recipe can belong to multiple categories.
     */
    @ManyToMany
    @JoinTable(
        name = "recipe_category",
        joinColumns = @JoinColumn(name = "recipe_id"),
        inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    @JsonManagedReference
    private Set<Category> categories = new HashSet<>();

    /**
     * The images associated with the recipe.
     * A recipe can have multiple images.
     */
    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Image> images = new HashSet<>();

    /**
     * The instructions for preparing the recipe.
     */
    @Lob
    @Column(columnDefinition = "TEXT", nullable = false)
    private String instructions;

    /**
     * Default constructor for JPA.
     */
    public Recipe() {}

    /**
     * Constructs a new recipe with the given details.
     *
     * @param title The title of the recipe.
     * @param difficulty The difficulty level of the recipe.
     * @param time The time required to prepare the recipe.
     * @param categories The categories this recipe belongs to.
     * @param instructions The instructions for preparing the recipe.
     */
    public Recipe(String title, Difficulty difficulty, Time time, Set<Category> categories, String instructions) {
        this.title = title;
        this.difficulty = difficulty;
        this.time = time;
        this.categories = categories != null ? categories : new HashSet<>();
        this.instructions = instructions;
    }

    /**
     * Gets the unique identifier of the recipe.
     *
     * @return The recipe ID.
     */
    public Integer getId() {
        return id;
    }

    /**
     * Sets the unique identifier of the recipe.
     *
     * @param id The recipe ID.
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * Gets the title of the recipe.
     *
     * @return The recipe title.
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sets the title of the recipe.
     *
     * @param title The recipe title.
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Gets the difficulty level of the recipe.
     *
     * @return The difficulty level.
     */
    public Difficulty getDifficulty() {
        return difficulty;
    }

    /**
     * Sets the difficulty level of the recipe.
     *
     * @param difficulty The difficulty level.
     */
    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    /**
     * Gets the time required to prepare the recipe.
     *
     * @return The preparation time.
     */
    public Time getTime() {
        return time;
    }

    /**
     * Sets the time required to prepare the recipe.
     *
     * @param time The preparation time.
     */
    public void setTime(Time time) {
        this.time = time;
    }

    /**
     * Gets the categories this recipe belongs to.
     *
     * @return The set of categories.
     */
    public Set<Category> getCategories() {
        return categories;
    }

    /**
     * Sets the categories this recipe belongs to.
     *
     * @param categories The set of categories.
     */
    public void setCategories(Set<Category> categories) {
        this.categories = categories != null ? categories : new HashSet<>();
    }

    /**
     * Adds an image to the recipe.
     *
     * @param image The image to add.
     */
    public void addImage(Image image) {
        images.add(image);
        image.setRecipe(this);
    }

    /**
     * Gets the images associated with the recipe.
     *
     * @return The set of images.
     */
    public Set<Image> getImages() {
        return images;
    }

    /**
     * Sets the images associated with the recipe.
     *
     * @param images The set of images.
     */
    public void setImages(Set<Image> images) {
        this.images = images;
    }

    /**
     * Gets the instructions for preparing the recipe.
     *
     * @return The recipe instructions.
     */
    public String getInstructions() {
        return instructions;
    }

    /**
     * Sets the instructions for preparing the recipe.
     *
     * @param instructions The recipe instructions.
     */
    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }
}
