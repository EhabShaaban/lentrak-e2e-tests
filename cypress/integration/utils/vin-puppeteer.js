const puppeteer = require('puppeteer');
const { URL } = require('url');
const fse = require('fs-extra');
const path = require('path');

async function getVin(){

    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null
    });

    const page = await browser.newPage();

    const url = 'https://randomvin.com/';

    await page.goto(url)

    for(var i=0; i<20; i++){

      await page.waitForSelector("input[name='mk_real_vin']")

      await page.click("input[name='mk_real_vin']")
  
      await page.waitForTimeout(3000)
  
      await page.waitForSelector("#Result h2")
      
      let value = await page.$eval("#Result h2", e => e.innerText);
  
      console.log(value)

    }

    browser.close();
}

getVin();

// save request to hard disk
// page.on('response', async (response) => {
//   const url = new URL(response.url());
//   let filePath = path.resolve(`./output${url.pathname}`);
//   if (path.extname(url.pathname).trim() === '') {
//     filePath = `${filePath}/index.html`;
//   }
//   await fse.outputFile(filePath, await response.buffer());
// });
