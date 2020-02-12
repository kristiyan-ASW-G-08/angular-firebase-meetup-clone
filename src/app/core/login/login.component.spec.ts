import { render, wait } from '@testing-library/angular';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
describe('LoginComponent', () => {
  afterEach(jest.clearAllMocks);
  const authServiceMock = {
    login: jest.fn(),
  };
  const routerMock = {
    navigate: jest.fn(),
  };
  it('should render LoginForm', async () => {
    const {
      getByPlaceholderText,
      getByText,
      type,
      click,
      queryByText,
    } = await render(LoginComponent, {
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });
    const invalidInputs = [
      { placeholder: 'Enter an email address', value: 'invalidEmail' },
      { placeholder: 'Enter a Password', value: 'invPass' },
    ];
    invalidInputs.forEach(({ placeholder, value }) => {
      const input = getByPlaceholderText(placeholder);
      type(input, value);
    });

    const errors = [
      'Must be at least 12 characters long',
      'Must be a valid email',
    ];
    errors.forEach(value => expect(queryByText(value)).toBeTruthy());
    const inputs = [
      { placeholder: 'Enter an email address', value: 'someValid@mail.com' },
      { placeholder: 'Enter a Password', value: 'someValidPassword' },
    ];

    inputs.forEach(({ placeholder, value }) => {
      const input = getByPlaceholderText(placeholder);
      type(input, value);
    });

    const submitButton = getByText('Log In');

    click(submitButton);

    expect(authServiceMock.login).toHaveBeenCalledTimes(1);

    expect(authServiceMock.login).toHaveBeenCalledWith(
      inputs[0].value,
      inputs[1].value,
    );
    await wait(() => {
      expect(routerMock.navigate).toHaveBeenCalledTimes(1);
      expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
    });
  });
});
