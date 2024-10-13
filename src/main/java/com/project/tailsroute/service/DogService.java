package com.project.tailsroute.service;

import com.project.tailsroute.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogService {

    @Autowired
    private DogRepository dogRepository;

    public int lastNumber() {
        Integer number = dogRepository.lastNumber();
        return (number != null) ? number : 0; // null일 경우 0을 반환
    }

    public void upload(int loginedMemberId, String dogName, Double dogWeight, String dogType, String photoPath) {
        dogRepository.upload(loginedMemberId, dogName, dogWeight, dogType, photoPath);
    }
}
