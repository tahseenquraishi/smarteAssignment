import { SmarteAssignmentPage } from './app.po';

describe('smarte-assignment App', function() {
  let page: SmarteAssignmentPage;

  beforeEach(() => {
    page = new SmarteAssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
