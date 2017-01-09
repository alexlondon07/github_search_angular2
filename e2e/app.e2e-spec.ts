import { GithubSearchAngular2Page } from './app.po';

describe('github-search-angular2 App', function() {
  let page: GithubSearchAngular2Page;

  beforeEach(() => {
    page = new GithubSearchAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
