import { AngularQuizPocPage } from './app.po';

describe('angular-quiz-poc App', () => {
  let page: AngularQuizPocPage;

  beforeEach(() => {
    page = new AngularQuizPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
