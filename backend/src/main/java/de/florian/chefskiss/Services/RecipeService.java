package de.florian.chefskiss.services;

import de.florian.chefskiss.dto.RecipeDto;
import de.florian.chefskiss.entities.Category;
import de.florian.chefskiss.entities.Recipe;
import de.florian.chefskiss.enums.Difficulty;
import de.florian.chefskiss.enums.Time;
import de.florian.chefskiss.repositories.RecipeRepository;
import de.florian.chefskiss.specifications.RecipeSpecification;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.data.jpa.domain.Specification;
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
                    recipe.getDifficulty().name(),
                    recipe.getTime().name(),
                    recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet())
                )
            )
            .collect(Collectors.toList());
    }

    public List<RecipeDto> findRecipes(String category, Difficulty difficulty, Time time) {
        Specification<Recipe> specification = Specification.where(null);

        if (category != null && !category.isEmpty()) {
            specification = specification.and(RecipeSpecification.hasCategory(category));
        }
        if (difficulty != null) {
            specification = specification.and(RecipeSpecification.hasDifficulty(difficulty));
        }
        if (time != null) {
            specification = specification.and(RecipeSpecification.hasTime(time));
        }

        return recipeRepository
            .findAll(specification)
            .stream()
            .map(recipe ->
                new RecipeDto(
                    recipe.getId(),
                    recipe.getTitle(),
                    recipe.getDifficulty().name(),
                    recipe.getTime().name(),
                    recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet())
                )
            )
            .collect(Collectors.toList());
    }

    public Optional<RecipeDto> findById(Integer id) {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
        if (optionalRecipe.isPresent()) {
            Recipe recipe = optionalRecipe.get();
            return Optional.of(
                new RecipeDto(
                    recipe.getId(),
                    recipe.getTitle(),
                    recipe.getDifficulty().name(),
                    recipe.getTime().name(),
                    recipe.getCategories().stream().map(Category::getName).collect(Collectors.toSet())
                )
            );
        } else {
            return Optional.empty();
        }
    }
}
