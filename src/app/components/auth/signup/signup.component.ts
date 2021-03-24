import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hide: true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    })
   
  }
  signUp(form: NgForm){
    if(this.signupForm.invalid){
      return false;
    }
    else{
      this.router.navigate(['/'])
    }
  }

}
