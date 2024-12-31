import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to the input page before each test
  await page.goto('https://automation-playground.vercel.app/input');
});

test.describe('Learn how to handle input fields', () => {
  test('Enter your full Name', async ({ page }) => {
    const name = 'Adam Novotny';
    const nameInput = page.locator('input[name="input1"]');

    // Assert that the input is initially empty
    await expect(nameInput).toHaveValue('');

    // Fill the input with a name
    await nameInput.fill(name);

    // Assert that the input contains the correct value
    await expect(nameInput).toHaveValue(name);
  });
  test('Append a text and press keyboard tab', async ({ page }) => {
    const input2 = page.locator('input[name="input2"]');
    const input3 = page.locator('input[name="input3"]');
    const expectedValue = 'TestingBeLikeCrazy';

    // Click inside the input field
    await input2.click({ clickCount: 1 });

    // Move cursor to the end of the input
    await page.keyboard.press('End');

    // Use keyboard.type to type, without deleting existing value
    await page.keyboard.type('Crazy');

    // Assert that input equals to the expected string
    expect(input2).toHaveValue(expectedValue);

    // Use keyboard to send Tab
    await page.keyboard.press('Tab');

    // Assert next input in form has focus;
    await expect(input3).toBeFocused();
  });

  test('What is inside the text box', async ({ page }) => {
    const text = await page.getAttribute('input[name="input3"]', 'value');
    expect(text).toEqual('HelloWorld123');
  });

  test('Clear the text field', async ({ page }) => {
    const input4 = page.locator('input[name="input4"]');
    await input4.fill('');
    await expect(input4).toBeEmpty();
  });

  test('Check if input is disabled', async ({ page }) => {
    const inputLocator = page.locator('input[name="input5"]');

    // Assert that the input is disabled
    await expect(inputLocator).toBeDisabled();
  });

  test('Verify input is readonly using attribute', async ({ page }) => {
    const inputLocator = page.locator('input[name="input6"]');

    // Check if the 'readonly' attribute exists
    const isReadonly = await inputLocator.getAttribute('readonly');
    expect(isReadonly).not.toBeNull();
  });
});
