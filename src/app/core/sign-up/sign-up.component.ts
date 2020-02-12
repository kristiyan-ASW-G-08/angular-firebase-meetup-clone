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
  styleUrls: ['../../../styles/partials/form.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.signUpForm = formBuilder.group({
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
          passwords: { password },
        },
      } = this.signUpForm;
      if (this.signUpForm.status === 'VALID') {
        await this.authService.signUp(email, password);
        this.router.navigate(['/']);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
