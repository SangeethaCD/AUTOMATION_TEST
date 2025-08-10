import { BeforeAll,AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
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

AfterAll(async()=>{
    await context.close();
    await browser.close(); 
})

export {page};