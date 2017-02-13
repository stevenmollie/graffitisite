import { GraffitisitePage } from './app.po';

describe('graffitisite App', function() {
  let page: GraffitisitePage;

  beforeEach(() => {
    page = new GraffitisitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
