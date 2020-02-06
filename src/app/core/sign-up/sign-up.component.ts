import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ConfirmPasswordDirective } from 'src/app/validators/confirm-password/confirm-password.directive';

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
function confirmPassword({
  value: { password, confirmPassword },
}: AbstractControl): ValidationErrors | null {
  return password === confirmPassword
    ? null
    : { confirmPassword: true, message: 'Passwords must match' };
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = formBuilder.group({
      username: ['', [Validators.minLength(4), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwords: formBuilder.group(
        {
          password: ['', [Validators.min(12), Validators.required]],
          confirmPassword: ['', [Validators.required]],
        },
        { validators: [confirmPassword] },
      ),
    });
  }
  onSubmit() {
    console.log(this.signUpForm);
  }
}
