import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.minLength(4), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(12), Validators.required]],
      // confirmPassword: ['', min(12), required],
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
    // console.log(this.signUpForm.value);
  }
}
