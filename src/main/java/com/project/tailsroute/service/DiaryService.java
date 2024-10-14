package com.project.tailsroute.service;

import com.project.tailsroute.repository.DiaryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;

@Service
public class DiaryService {

    @Autowired
    private DiaryRepository diaryRepository;

    @Transactional
    public void writeDiary(int memberId, String title, String body, MultipartFile file,
                           LocalDateTime startDate, LocalDateTime endDate,
                           LocalDateTime takingTime, String information) {
        String imageUrl = null;
        if (file != null && !file.isEmpty()) {
            imageUrl = "/images/" + file.getOriginalFilename();
            try {
                file.transferTo(new File(imageUrl));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        diaryRepository.writeDiary(memberId, title, body, imageUrl, startDate, endDate, takingTime, information);
    }

}