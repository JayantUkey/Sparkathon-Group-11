package com.example.cowinner.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.cowinner.model.Hospital;
import com.example.cowinner.service.HospitalService;

@RestController
@RequestMapping("/hospital")
public class HospitalController {

	@Autowired
	private HospitalService hospitalService;

	@PostMapping("/register")
	public ResponseEntity<Hospital> registerHospital(@RequestBody Hospital hospital) {
		return hospitalService.registerHospital(hospital);
	}

	// for getting all hospitals
	@GetMapping("/all")
	public List<Hospital> getAllHospitals() {
		return hospitalService.getAllHospitals();
	}

	// get hospital by id
	@GetMapping("{hid}")
	public Optional<Hospital> getHospital(@PathVariable Integer hid) {
		return hospitalService.getHospital(hid);
	}

}
