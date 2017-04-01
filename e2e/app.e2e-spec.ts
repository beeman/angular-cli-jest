import { AngularCliJestPage } from './app.po';

describe('angular-cli-jest App', () => {
  let page: AngularCliJestPage;

  beforeEach(() => {
    page = new AngularCliJestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
