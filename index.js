// run `node index.js` in the terminal

const puppeteer = require('puppeteer')

const url = process.argv[2]
!url ? "Please provide a URL" : url

const run = async() => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  await page.screenshot({path: 'screenshot.png'})
  browser.close()
}

run()