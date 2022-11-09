// imports
var fs = require('fs'); // file writer

var root = "https://www.zillow.com/homes/for_rent/"; 

const puppeteer = require('puppeteer');

(async function scrape() {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto(root);

    // extracting information from code
    let properties = await page.evaluate(() => {
        const pgTag = document.querySelector(".search-title");
        return pgTag.textContent;
    });

    // logging results
    console.log(properties);
    await browser.close();

})();
