import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

//someValidPassword10
interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export function confirmPassword({
  value: { password, confirmPassword },
}: AbstractControl): ValidationErrors | null {
  return password === confirmPassword
    ? null
    : { confirmPassword: true, message: 'Passwords must match' };
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) {
    this.signUpForm = formBuilder.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwords: formBuilder.group(
        {
          password: ['', [Validators.minLength(12), Validators.required]],
          confirmPassword: ['', [Validators.required]],
        },
        { validators: [confirmPassword] },
      ),
    });
  }
  async onSubmit() {
    try {
      const {
        value: {
          email,
          displayName,
          passwords: { password },
        },
      } = this.signUpForm;
      if (this.signUpForm.status === 'VALID') {
        await this.authService.signUp(email, password, displayName);
        this.router.navigate(['/']);
      }
    } catch (err) {
      const errors = {
        'auth/email-already-in-use': 'Email is already in use',
      };
      this.flashMessage.show(
        errors[err.code]
          ? errors[err.code]
          : 'Something went wrong. Try again.',
        {
          cssClass: 'message is-danger',
          timeout: 4000,
        },
      );
    }
  }
}
