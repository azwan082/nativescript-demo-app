// var application = require("application");
// application.mainModule = "app/main-page";
// application.start();

var application = require('./demo/ios/application');

// start app
try {
    UIApplicationMain(0, null, null, 'TNSAppDelegate');
} catch (err) {
    console.log(err);
}