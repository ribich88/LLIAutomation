var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
  'browserstack.local' : 'true'
}

// var driver = new webdriver.Builder().
//   usingServer('http://hub-cloud.browserstack.com/wd/hub').
//   withCapabilities(capabilities).
//   build();

// Running selenium-server.jar at port 4444
var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities({
  'browserName' : 'firefox'
}).build()

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function(title) {
  console.log(title);
});

driver.quit();