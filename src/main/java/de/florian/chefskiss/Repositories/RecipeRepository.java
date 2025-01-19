package de.florian.chefskiss.Repositories;

import de.florian.chefskiss.Entities.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Integer> {

}
