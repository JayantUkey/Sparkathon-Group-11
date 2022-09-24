package com.example.cowinner.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "p_id")
	private int pId;

	@Column(name = "role")
	private String role;

	@Column(name = "name")
	private String name;

	@Column(name = "p_dose")
	private String pDose;
	
	@Column(name = "adhar_no")
	private String adharNo;

	@Column(name = "mobile_no")
	private String mobileNo;

	@Column(name = "address")
	private String address;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;
	
	/*
	 * Patient ->role, name, pDose, adharNo, mobileNo, address, email, password
	 */

}
