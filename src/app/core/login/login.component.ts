import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    private flashMessage: FlashMessagesService,
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
        'auth/user-not-found': 'User with this email was not found',
        'auth/wrong-password': 'Wrong Password.',
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
      console.log(err);
    }
  }
}
