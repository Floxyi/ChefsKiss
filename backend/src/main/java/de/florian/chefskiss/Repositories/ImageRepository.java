package de.florian.chefskiss.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import de.florian.chefskiss.Entities.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
