package com.project.tailsroute.controller;

import com.project.tailsroute.service.DiaryService;
import com.project.tailsroute.vo.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

    @Controller
    @RequestMapping("/usr/diary")
    public class UsrDiaryController {

        @Autowired
        private DiaryService diaryService;

        @GetMapping("/write")
        public String showWriteForm(Model model) {
            model.addAttribute("diary", new Diary());
            return "usr/diary/write";
        }

        @PostMapping("/write")
        public String submitDiaryEntry(
                @RequestParam("memberId") int memberId,
                @RequestParam("title") String title,
                @RequestParam("body") String body,
                @RequestParam("file") MultipartFile file,
                @RequestParam("startDate") LocalDateTime startDate,
                @RequestParam("endDate") LocalDateTime endDate,
                @RequestParam("takingTime") LocalDateTime takingTime,
                @RequestParam("information") String information
        ) {
            diaryService.writeDiary(memberId, title, body, file, startDate, endDate, takingTime, information);
            return "redirect:/usr/diary/list";
        }

    }