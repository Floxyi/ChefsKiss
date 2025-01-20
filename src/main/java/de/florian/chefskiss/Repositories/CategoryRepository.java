package de.florian.chefskiss.Repositories;

import de.florian.chefskiss.Entities.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Integer> {
    Category findFirstByName(String name);
}
