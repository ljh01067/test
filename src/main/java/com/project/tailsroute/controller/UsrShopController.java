package com.project.tailsroute.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsrShopController {
    @GetMapping("/usr/shop/shopping")
    public String showMain(Model model) {
        model.addAttribute("message", "쇼핑사이트");
        return "usr/shop/shopping";
    }
}