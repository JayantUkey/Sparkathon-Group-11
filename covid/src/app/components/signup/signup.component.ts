import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  success = false

  signup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
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
