import { PharmacyPage } from './app.po';

describe('pharmacy App', function() {
  let page: PharmacyPage;

  beforeEach(() => {
    page = new PharmacyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
