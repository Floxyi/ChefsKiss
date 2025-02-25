package de.florian.chefskiss.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import de.florian.chefskiss.Entities.Image;
import de.florian.chefskiss.Entities.Recipe;
import de.florian.chefskiss.Repositories.ImageRepository;
import de.florian.chefskiss.Repositories.RecipeRepository;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private RecipeRepository recipeRepository;

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