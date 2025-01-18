package de.florian.chefskiss.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomepageController {

    @GetMapping("/greeting")
    public String greet() {
        return "Hello from Spring Boot!";
    }
}
