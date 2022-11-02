// imports
var fs = require('fs'); // file writer

var root = "https://www.americancampus.com/student-apartments/tx/college-station/u-centre-at-northgate/floor-plans#/"; 

const puppeteer = require('puppeteer');

(async function scrape() {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto(root);

    // extracting information from code
    let properties = await page.evaluate(() => {
        const pgTag = document.querySelector(".property-price");
        return pgTag.textContent;
    });

    // logging results
    console.log(properties);
    await browser.close();

})();
