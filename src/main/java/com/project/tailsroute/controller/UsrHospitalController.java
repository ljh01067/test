package com.project.tailsroute.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsrHospitalController {
    @GetMapping("/usr/hospital/main")
    public String showMain(Model model) {
        // model.addAttribute("message", "DB추가");
        return "usr/map/hospital";

    }

}