package de.florian.chefskiss.services;

import de.florian.chefskiss.dto.RecipeDto;
import de.florian.chefskiss.entities.Category;
import de.florian.chefskiss.entities.Recipe;
import de.florian.chefskiss.repositories.RecipeRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<RecipeDto> findAllRecipes() {
        List<Recipe> recipes = recipeRepository.findAll();

        return recipes
            .stream()
            .map(recipe ->
                new RecipeDto(
                    recipe.getId(),
                    recipe.getTitle(),
                    recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet())
                )
            )
            .collect(Collectors.toList());
    }

    public List<RecipeDto> findByCategory(String categoryName) {
        List<Recipe> recipes = recipeRepository.findByCategoryName(categoryName);
        return recipes
            .stream()
            .map(recipe ->
                new RecipeDto(
                    recipe.getId(),
                    recipe.getTitle(),
                    recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet())
                )
            )
            .collect(Collectors.toList());
    }

    public Optional<RecipeDto> findById(Integer id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isPresent()) {
            Recipe r = recipe.get();
            return Optional.of(
                new RecipeDto(
                    r.getId(),
                    r.getTitle(),
                    r.getCategories().stream().map(Category::getName).collect(Collectors.toSet())
                )
            );
        } else {
            return Optional.empty();
        }
    }
}
