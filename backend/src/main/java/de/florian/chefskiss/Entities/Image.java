package de.florian.chefskiss.Entities;

import jakarta.persistence.*;

/**
 * Represents an image associated with a recipe.
 * An image is stored with its name, type, and binary data.
 */
@Entity
public class Image {

    /**
     * The unique identifier of the image.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The name of the image file.
     */
    private String name;

    /**
     * The type of the image (e.g., "image/png", "image/jpeg").
     */
    private String type;

    /**
     * The binary data representing the image.
     */
    @Lob
    private byte[] data;

    /**
     * The recipe associated with this image.
     * A recipe can have multiple images associated with it.
     */
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "recipe_id", nullable = false)
    private Recipe recipe;

    /**
     * Gets the unique identifier of the image.
     *
     * @return The image ID.
     */
    public Long getId() {
        return id;
    }

    /**
     * Sets the unique identifier of the image.
     *
     * @param id The image ID.
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Gets the name of the image file.
     *
     * @return The image name.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the name of the image file.
     *
     * @param name The image name.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the type of the image (e.g., "image/png").
     *
     * @return The image type.
     */
    public String getType() {
        return type;
    }

    /**
     * Sets the type of the image (e.g., "image/png").
     *
     * @param type The image type.
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * Gets the binary data representing the image.
     *
     * @return The image data as a byte array.
     */
    public byte[] getData() {
        return data;
    }

    /**
     * Sets the binary data representing the image.
     *
     * @param data The image data as a byte array.
     */
    public void setData(byte[] data) {
        this.data = data;
    }

    /**
     * Gets the recipe associated with this image.
     *
     * @return The associated recipe.
     */
    public Recipe getRecipe() {
        return recipe;
    }

    /**
     * Sets the recipe associated with this image.
     *
     * @param recipe The associated recipe.
     */
    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }
}
