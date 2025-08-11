import * as os from 'os';
import open from 'open';
import { generate } from 'multiple-cucumber-html-reporter';

interface PlatformInfo {
  name: string;
  version: string;
}

function getPlatformInfo(): PlatformInfo {
  return {
    name: os.platform(),
    version: os.release()
  };
}

function generateReport() {
  const platformInfo: PlatformInfo = getPlatformInfo();
  generate({
    jsonDir: "reports/",
    openReportInBrowser: true,
    reportPath: "./",
    reportName: "Xened Automation Test Report",
    displayDuration: true,
    metadata: {
      browser: {
        name: "Chrome",
        version: "121",
      },
      device: os.hostname(),
      platform: platformInfo,
    },
  });
}

generateReport();

(async () => {
  await open('./index.html');
})();