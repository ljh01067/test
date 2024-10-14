package com.project.tailsroute.vo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Diary {
    private int id;
    private String regDate;
    private String updateDate;
    private int memberId;
    private String title;
    private String body;
    private String imagePath;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime TakingTime;
    private String information;

    private String extra__writer;
}
