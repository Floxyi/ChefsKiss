package de.florian.chefskiss.Services;

import de.florian.chefskiss.Entities.Image;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Repositories.ImageRepository;
import de.florian.chefskiss.Repositories.RecipeRepository;
import java.io.IOException;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * Service class for managing images.
 * Provides methods for saving images and associating them with recipes.
 */
@Service
public class ImageService {

    private final ImageRepository imageRepository;
    private final RecipeRepository recipeRepository;

    /**
     * Constructor for initializing the ImageService with the provided repositories.
     *
     * @param imageRepository the ImageRepository to be used for saving image data
     * @param recipeRepository the RecipeRepository to find and update recipes
     */
    public ImageService(ImageRepository imageRepository, RecipeRepository recipeRepository) {
        this.imageRepository = imageRepository;
        this.recipeRepository = recipeRepository;
    }

    /**
     * Saves an image and associates it with a specific recipe.
     * If the recipe is found, the image is stored in the database and linked to the recipe.
     *
     * @param file the image file to be uploaded
     * @param recipeId the ID of the recipe to associate the image with
     * @throws IOException if an error occurs while processing the file
     * @throws IllegalStateException if the recipe with the given ID is not found
     */
    public void saveImage(MultipartFile file, Integer recipeId) throws IOException {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(recipeId);
        if (optionalRecipe.isPresent()) {
            Recipe recipe = optionalRecipe.get();
            Image image = new Image();
            image.setName(file.getOriginalFilename());
            image.setType(file.getContentType());
            image.setData(file.getBytes());
            image.setRecipe(recipe);

            recipe.addImage(image);
            imageRepository.save(image);
            recipeRepository.save(recipe);
        } else {
            throw new IllegalStateException("Recipe not found");
        }
    }
}
