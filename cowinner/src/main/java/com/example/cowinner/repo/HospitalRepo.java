package com.example.cowinner.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cowinner.model.Hospital;

@Repository
public interface HospitalRepo extends JpaRepository<Hospital, Integer> {

}
