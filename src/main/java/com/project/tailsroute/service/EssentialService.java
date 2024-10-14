package com.project.tailsroute.service;

import com.project.tailsroute.repository.EssentialsRepository;
import com.project.tailsroute.vo.Essentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EssentialService {

    private final EssentialsRepository essentialsRepository;

    @Autowired
    public EssentialService(EssentialsRepository essentialsRepository) {
        this.essentialsRepository = essentialsRepository;
    }

    public void saveEssential(Essentials essential) {
        // Repository를 사용하여 Essential 객체를 저장
        essentialsRepository.addEssentials(
                essential.getMemberId(),
                essential.getItemType(),
                essential.getPurchaseDate(),
                essential.getUsageCycle(),
                essential.getTiming()
        );
    }
}