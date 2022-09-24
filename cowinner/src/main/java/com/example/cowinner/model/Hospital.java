package com.example.cowinner.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "hospital")
public class Hospital {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "h_id")
	private int hid;
	
	@Column(name = "h_name")
	private String hName;
	
	@Column(name="h_address")
	private String address;
	
	@Column(name="slots")
	private String vaccineSlots;
	
	@Column(name = "dose")
	private String dose;
	
	@OneToMany(cascade = { CascadeType.ALL })
	@JoinColumn(name = "h_id", referencedColumnName = "h_id")
	private List<Patient> patient;
	
	

}
