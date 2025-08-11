import { BeforeAll,AfterAll, setDefaultTimeout,After,Status } from "@cucumber/cucumber";
import { Browser,BrowserContext,Page, chromium} from "@playwright/test";

let browser:Browser;
let context:BrowserContext;
let page:Page;

setDefaultTimeout(30*1000*40);

BeforeAll(async()=>{
    console.log("logging....")
    browser = await chromium.launch({ headless: false, args: ['--no-sandbox', '--disable-extensions'] })
    context = await browser.newContext();
    page = await context.newPage();
})
After(async function ({ result, pickle }) {
  if (result?.status === Status.FAILED) {
    const scenarioName = pickle.name.replace(/\s+/g, '_');
    await page.screenshot({ path: `error_${scenarioName}.png` });
  }
});

AfterAll(async()=>{
    await context.close();
    await browser.close(); 
})

export {page};