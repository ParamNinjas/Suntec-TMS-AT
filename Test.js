const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function dashTest() {

        let driver = await new Builder()
                .forBrowser('chrome')
                .build();

        await driver.get('https://suntech-tms-fe.vercel.app/')

        const element = await driver.findElement(By.id('email'))
        await element.sendKeys('mpumelelo.mpe@umuzi.org', Key.RETURN)

        const element2 = await driver.findElement(By.id('password'))
        await element2.sendKeys('123456', Key.RETURN)
        
        // await driver.wait(until.titleIs('mpumelelo.mpe@umuzi.org - Sign In'), 1000)
        // const loginbtn = await driver.findElement(By.id('login'))
        await driver.findElement (By.id('login')).click();
        await driver.get('https://suntech-tms-fe.vercel.app/Dashboard')
        // await loginbtn.click()
        // let driver = await new Builder().forBrowser("chrome").build();

        // await driver.get("https://suntech-tms-fe.vercel.app/");

        // console.log(await By.getTitle())
        // expect(By).toHaveTitleContaining("Sign In")
        // $("#email").setValue("majinnbuu")

        // console.log('Driver', driver);
        // driver.findElement(By.linkText("Sign in")).click();


        // var title = await driver.getTitle();
        // console.log('Title is:',title);

        // await driver.quit();

}

dashTest()
