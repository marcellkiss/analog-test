import { beforeEach, describe, expect, it } from 'vitest';
import HomeComponent from './home.page';

describe('TestPage', () => {
  let testPage: HomeComponent;

  beforeEach(() => {
    testPage = new HomeComponent();
  });

  it('should create an instance', () => {
    expect(testPage).toBeTruthy();
  });

  // Add more test cases here
});
