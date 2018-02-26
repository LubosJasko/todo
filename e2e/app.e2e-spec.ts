import { AppPage } from './app.po';

describe('bsc App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome on Todos Page');
  });

  it('should display first note', () => {
    page.navigateTo();
    expect(page.getFirstNoteText()).toEqual('Jogging in park');
  });

});
