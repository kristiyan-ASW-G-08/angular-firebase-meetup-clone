import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appConfirmPassword][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmPasswordDirective,
      multi: true,
    },
  ],
})
export class ConfirmPasswordDirective implements Validator {
  constructor() {}

  validate({ value: { password, confirmPassword } }: AbstractControl) {
    console.log(password, confirmPassword);
    return password === confirmPassword
      ? null
      : { confirmPassword: true, message: 'Passwords must match' };
  }
}
