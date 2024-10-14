package com.project.tailsroute.controller;

import com.project.tailsroute.service.EssentialService;
import com.project.tailsroute.vo.Essentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/essential")
public class EssentialController {

    private final EssentialService essentialService;

    @Autowired
    public EssentialController(EssentialService essentialService) {
        this.essentialService = essentialService;
    }

    @PostMapping("/add")
    public String addEssential(@RequestBody Essentials essential) {
        essentialService.saveEssential(essential);
        return "Essential added successfully";
    }
}