import { test, expect } from "@playwright/test"

test.describe('Check Pojan landing page', () => {
    test('check landing page', async ({ page }) => {
        await page.goto('https://www.pojan.id');

        await expect(page).toHaveURL('https://pojan.id/')
        await expect(page).toHaveTitle(/pojan.id/)
    });
    });