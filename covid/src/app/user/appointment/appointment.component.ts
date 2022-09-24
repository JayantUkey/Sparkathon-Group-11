import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
check(){
  alert('You have booked your vaccination slot successfully!!')
}
  success = false

  signup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    hospital: new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    aadhar:new FormControl('',[Validators.required]),
    mobile_no:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    p_dose:new FormControl('',[Validators.required]),
  })


  Submit(){
    console.log(this.signup.value)
  }

}
