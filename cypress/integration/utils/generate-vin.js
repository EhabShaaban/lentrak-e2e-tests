const puppeteer = require('puppeteer');
const fs = require('fs')

async function getVin(){

    var vinArr  = [

    ];

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
  
      vinArr.push(value)

      console.log(vinArr)

    }

    fs.writeFile('./cypress/fixtures/vin.json',
    JSON.stringify(vinArr, null, 2), err => {
      if (err) {
        console.log('Error writing vin.json', err)
      } else {
        console.log('Successfully wrote vin.json')
      }
      });

    browser.close();
}

getVin();