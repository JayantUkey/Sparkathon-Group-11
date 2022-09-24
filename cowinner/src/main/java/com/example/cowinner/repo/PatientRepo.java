package com.example.cowinner.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cowinner.model.Patient;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Integer> {

}
