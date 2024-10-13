package com.project.tailsroute.repository;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EssentialsRepository {

    @Insert("INSERT INTO essentials (regDate, updateDate, memberId, itemType, purchaseDate, usageCycle, timing) " +
            "VALUES (NOW(), NOW(), #{memberId}, #{itemType}, #{purchaseDate}, #{usageCycle}, #{timing})")
    void addEssentials(@Param("memberId") int memberId,
                       @Param("itemType") String itemType,
                       @Param("purchaseDate") String purchaseDate,
                       @Param("usageCycle") Integer usageCycle,
                       @Param("timing") Integer timing);
}