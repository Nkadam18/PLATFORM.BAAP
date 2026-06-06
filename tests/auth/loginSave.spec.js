import { test } from '@playwright/test';
import {LoginPage} from '../login/login'
 
test('Save Client Login Session', async ({ page }) => {
  const clientLogin = new LoginPage(page);
 
  await clientLogin.login();
 
  // 💾 save session
  await page.context().storageState({
    path: 'auth/client.json',
  });
 
  console.log('✅ Client session saved');
});
 
   
 
