const { browser } = require("selenium-webdriver")

describe("Suntech Web App", async()=>
{


it("Login Fail Page", async()=>
{
//webdriverio Async
await browser.url("https://suntech-tms-fe.vercel.app/")
//resolved.pending, rejected
console.log(await browser.getTitle())
await expect(browser).toHaveTitleContaining("Sign In")
//CSS Selector, Xpath
await $("#email").setValue("majinnbuu")
const password = $("//input[@type='password']")
await password.setValue("learning")
await $("#signInBtn").click() 
await console.log(await $(".alert-danger").getText())
await browser.waitUntil(async()=> await $("signInBtn").getAttribute('value') === 'Sign In ')
{
    timeout: 5000,
    timeoutMsg; 'Error message is not showing up';
}
await console.log(await $(".alert-danger").getText())


})











































}













































)