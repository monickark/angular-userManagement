import { UserSignupPage } from './app.po';

describe('user-signup App', () => {
  let page: UserSignupPage;

  beforeEach(() => {
    page = new UserSignupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
