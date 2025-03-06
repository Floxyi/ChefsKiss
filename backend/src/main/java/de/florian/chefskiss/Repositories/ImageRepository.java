package de.florian.chefskiss.Repositories;

import de.florian.chefskiss.Entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for performing CRUD operations on the {@link Image} entity.
 * This extends {@link JpaRepository} to provide basic CRUD operations and additional query methods.
 */
public interface ImageRepository extends JpaRepository<Image, Long> {}
