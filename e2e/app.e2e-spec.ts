import { MyrxPage } from './app.po';

describe('myrx App', function() {
  let page: MyrxPage;

  beforeEach(() => {
    page = new MyrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
