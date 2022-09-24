package com.example.cowinner.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.cowinner.model.Hospital;
import com.example.cowinner.repo.HospitalRepo;

@Service
public class HospitalService {

	@Autowired
	private HospitalRepo hospitalRepo;

	public ResponseEntity<Hospital> registerHospital(@RequestBody Hospital hospital) {

		hospitalRepo.save(hospital);

		return new ResponseEntity<Hospital>(hospital, HttpStatus.ACCEPTED);
	}
	
	public List<Hospital> getAllHospitals() {
		return hospitalRepo.findAll();
	}

	public Optional<Hospital> getHospital(Integer id) {
		return hospitalRepo.findById(id);
	}
}
