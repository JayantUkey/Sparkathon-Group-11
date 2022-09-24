package com.example.cowinner.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.cowinner.model.Hospital;
import com.example.cowinner.model.Patient;
import com.example.cowinner.repo.HospitalRepo;
import com.example.cowinner.repo.PatientRepo;

@Service
public class PatientService {

	@Autowired
	private PatientRepo patientRepo;

	@Autowired
	private HospitalRepo hospitalRepo;

	public ResponseEntity<Patient> createPatient(Patient patient) {

		patientRepo.save(patient);
		return new ResponseEntity<Patient>(patient, HttpStatus.ACCEPTED);
	}

	public List<Patient> showPatients() {
		return patientRepo.findAll();
	}

	public List<Hospital> getAllHospitals() {
		return hospitalRepo.findAll();
	}

	public Optional<Hospital> getHospital(Integer id) {
		return hospitalRepo.findById(id);
	}
}
