package de.florian.chefskiss.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/homepage")
public class HomepageController {

    @GetMapping("/greeting")
    public String greet() {
        return "Hello from Spring Boot!";
    }
}
