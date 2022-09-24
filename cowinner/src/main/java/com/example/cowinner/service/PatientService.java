package com.example.cowinner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.cowinner.model.Patient;
import com.example.cowinner.repo.PatientRepo;

@Service
public class PatientService {

	@Autowired
	private PatientRepo patientRepo;

	public ResponseEntity<Patient> createPatient(Patient patient) {

		patientRepo.save(patient);
		return new ResponseEntity<Patient>(patient, HttpStatus.ACCEPTED);
	}

	public List<Patient> showPatients() {
		return patientRepo.findAll();
	}

}
