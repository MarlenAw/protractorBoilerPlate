exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/proWhat',
    specs: ['todoSpec.js']
};

//This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). 
//It will use the defaults for all other configuration. Chrome is the default browser.


//run the test : protractor config.js in CMD