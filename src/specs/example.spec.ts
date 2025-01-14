import {test,expect} from '@playwright/test';
import { ExampleClass } from '../pages/example.page';

test('Navigate to Google', async ({ page }) => {
    await page.goto('https://google.com/');
    const url = page.url();
    expect(url).toContain('google');
});

test('Seach for Playwright', async ({ page }) => {
    await page.goto('https://google.com/');
    let exampletest = new ExampleClass(page);
    await exampletest.typeSearchText();
    await exampletest.pressEnter();
    const text = await exampletest.searchResult();
    console.log(text);
    expect(text).toContain('Playwright: Fast and reliable');
});