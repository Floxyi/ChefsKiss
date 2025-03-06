package de.florian.chefskiss.Dto;

/**
 * Data Transfer Object (DTO) representing an image with its type and binary data.
 */
public record ImageDto(
    /**
     * The MIME type of the image (e.g., "image/jpeg", "image/png").
     */
    String type,

    /**
     * The binary data of the image.
     */
    byte[] data
) {}
