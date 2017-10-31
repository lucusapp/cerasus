import { CerasusPage } from './app.po';

describe('cerasus App', () => {
  let page: CerasusPage;

  beforeEach(() => {
    page = new CerasusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
