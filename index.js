const {Builder, By, Key, util} = require('selenium-webdriver');

async function example() {
    // bot quisioner
    const NIM = '';
    // Ubah kode berikut dengan xpath quisioner yang dikerjakan
    // ex : '/html/body/div[3]/div/div[1]/table/tbody/tr[6]/td[5]/a'
    let link = '';


    let driver = await new Builder().forBrowser('firefox').build();
    await driver.get('http://ujian.jti.polinema.ac.id/');
    await driver.findElement(By.id('xuser_name')).sendKeys(NIM);
    await driver.findElement(By.id('xuser_password')).sendKeys(NIM);
    await driver.findElement(By.id('login')).click()
    await driver.sleep(3000);

    let kerjakan = '/html/body/div[3]/div/div[3]/a[1]';
    await driver.findElement(By.xpath(link)).click();
    await driver.findElement(By.xpath(kerjakan)).click();
    await driver.sleep(3000);

    let run = true;
    let index = 1;
    let num = 0;
    do {
        let ans = By.id('answertext');
        let next = By.id('nextquestion');
        let terminate = By.id('terminatetest');

        // Nilai Quisioner 1 - 5 Random;
        num = ((num + index)%2) + 4;
        await driver.findElement(ans).sendKeys(num);
        await driver.findElement(next).click();
        if (index <= 22) {
            await driver.sleep(2000);
            index++;
        } else {
            await driver.findElement(terminate).click()
            run = false;
        }
    } while (run)
    await driver.findElement(By.id('forceterminate')).click()
}
example();