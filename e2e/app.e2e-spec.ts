import { GettingStartedWithAngular2Page } from './app.po';

describe('getting-started-with-angular2 App', function() {
  let page: GettingStartedWithAngular2Page;

  beforeEach(() => {
    page = new GettingStartedWithAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
