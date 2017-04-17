import { StackChartPage } from './app.po';

describe('stack-chart App', () => {
  let page: StackChartPage;

  beforeEach(() => {
    page = new StackChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
