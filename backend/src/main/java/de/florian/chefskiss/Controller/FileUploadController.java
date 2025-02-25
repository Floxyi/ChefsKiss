package de.florian.chefskiss.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import de.florian.chefskiss.Services.ImageService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("files") List<MultipartFile> files, @RequestParam("recipeId") Integer recipeId) {
        try {
            for (MultipartFile file : files) {
                imageService.saveImage(file, recipeId);
            }
            return ResponseEntity.ok("Files uploaded successfully.");
        } catch (IOException | IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed: " + e.getMessage());
        }
    }
}