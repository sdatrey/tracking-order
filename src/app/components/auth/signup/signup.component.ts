import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldControl } from "@angular/material/form-field";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
   
  }
onSubmit() {
  
  if(this.signupForm.valid){
    this.submitted = true;
  }
  else{
    return
  }
}

}
