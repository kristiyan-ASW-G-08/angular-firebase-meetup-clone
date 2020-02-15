import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(12), Validators.required]],
    });
  }

  async onSubmit() {
    try {
      const {
        value: { email, password },
      } = this.loginForm;

      if (this.loginForm.status === 'VALID') {
        await this.authService.login(email, password);
        this.router.navigate(['/']);
      }
    } catch (err) {
      const errors = {
        'auth/user-not-found': '',
        'auth/wrong-password': '',
      };
      console.log(err);
    }
  }
}
