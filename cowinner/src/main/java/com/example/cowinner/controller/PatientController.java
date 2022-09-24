package com.example.cowinner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cowinner.model.Patient;
import com.example.cowinner.service.PatientService;

@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	private PatientService patientService;

	@GetMapping("/getall")
	public List<Patient> showPatients() {
		return patientService.showPatients();
	}

	@PostMapping("/patient-register")
	public ResponseEntity<Patient> registerPatient(@RequestBody Patient patient) {
		return patientService.createPatient(patient);
	}

	// Fetching Hospital and Patient Details

}
