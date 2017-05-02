import { WhatWeDoPage } from './app.po';

describe('what-we-do App', () => {
  let page: WhatWeDoPage;

  beforeEach(() => {
    page = new WhatWeDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
