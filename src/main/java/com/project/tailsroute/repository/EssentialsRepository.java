package com.project.tailsroute.repository;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EssentialsRepository {

    @Insert("INSERT INTO essentials (regDate, updateDate, memberId, itemType, purchaseDate, usageCycle, timing) " +
            "VALUES (NOW(), NOW(), #{memberId}, #{itemType}, #{purchaseDate}, #{usageCycle}, #{timing})")
    public void addEssentials( int memberId, String itemType, String purchaseDate, Integer usageCycle, Integer timing);
}