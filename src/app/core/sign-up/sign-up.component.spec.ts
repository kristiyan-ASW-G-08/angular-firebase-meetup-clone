import { render, wait } from '@testing-library/angular';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
describe('SignUpComponent', () => {
  afterEach(jest.clearAllMocks);
  const authServiceMock = {
    signUp: jest.fn(),
  };
  const routerMock = {
    navigate: jest.fn(),
  };
  it('should render SignUpComponent', async () => {
    const {
      getByPlaceholderText,
      getByText,
      type,
      click,
      queryByText,
    } = await render(SignUpComponent, {
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });
    const invalidInputs = [
      { placeholder: 'Enter an username', value: '' },
      { placeholder: 'Enter an email address', value: 'invalidEmail' },
      { placeholder: 'Enter a Password', value: 'invPass' },
      { placeholder: 'Repeat your Password', value: 'motMr' },
    ];
    invalidInputs.forEach(({ placeholder, value }) => {
      const input = getByPlaceholderText(placeholder);
      type(input, value);
    });
    const inputs = [
      { placeholder: 'Enter an username', value: 'someUser' },
      { placeholder: 'Enter an email address', value: 'someValid@mail.com' },
      { placeholder: 'Enter a Password', value: 'someValidPassword' },
      { placeholder: 'Repeat your Password', value: 'someValidPassword' },
    ];

    inputs.forEach(({ placeholder, value }) => {
      const input = getByPlaceholderText(placeholder);
      type(input, value);
    });

    const submitButton = getByText('Sign Up');

    click(submitButton);

    expect(authServiceMock.signUp).toHaveBeenCalledTimes(1);

    expect(authServiceMock.signUp).toHaveBeenCalledWith(
      inputs[0].value,
      inputs[1].value,
    );

    await wait(() => {
      expect(routerMock.navigate).toHaveBeenCalledTimes(1);
      expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
    });
  });
});
