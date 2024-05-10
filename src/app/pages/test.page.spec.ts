import { beforeEach, describe, expect, it } from 'vitest';
import TestPage from './test.page';

describe('TestPage', () => {
  let testPage: TestPage;

  beforeEach(() => {
    testPage = new TestPage();
  });

  it('should create an instance', () => {
    expect(testPage).toBeTruthy();
  });

  // Add more test cases here
});
