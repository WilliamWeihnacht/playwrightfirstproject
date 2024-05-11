import type {Page,Locator} from '@playwright/test';

export class ExampleClass {
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    async typeSearchText(){
        await this.page.locator('.gLFyf').fill('Playwright')
    }
    async pressEnter(){
        await this.page.keyboard.press('Enter');
    }
    async  searchResult(){
        return this.page.innerText('//h3[contains(text(), "Playwright:")]')
    }
}