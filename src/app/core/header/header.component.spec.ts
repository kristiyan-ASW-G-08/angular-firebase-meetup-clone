import { render } from '@testing-library/angular';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('HeaderComponent', () => {
  it('mobile nav button', async () => {
    const { getByTestId, queryByTestId, click } = await render(
      HeaderComponent,
      {
        declarations: [],
        imports: [FontAwesomeModule],
      },
    );

    const mobileNav = queryByTestId('mobile-nav');

    expect(mobileNav.classList).not.toContain('mobile-nav-active');

    const navButton = getByTestId('nav-button');
    click(navButton);

    expect(mobileNav.classList).toContain('mobile-nav-active');

    click(navButton);

    expect(mobileNav.classList).not.toContain('mobile-nav-active');
  });
});
