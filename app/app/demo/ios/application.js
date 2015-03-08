var __extends = this.__extends || require('../extends');
var Window = require('./window');
var RootViewController = require('./rootViewController');
var MainViewController = require('./mainViewController');

// application
var TNSAppDelegate = (function(_super) {
	__extends(TNSAppDelegate, _super);
	function TNSAppDelegate() {
		_super.apply(this, arguments);
	}
	TNSAppDelegate.ObjCProtocols = [UIApplicationDelegate];
	// TNSAppDelegate.prototype.applicationWillFinishLaunchingWithOptions = function(application, launchOptions) {};
	TNSAppDelegate.prototype.applicationDidFinishLaunchingWithOptions = function(application, launchOptions) {
		this.window = new Window(UIScreen.mainScreen().bounds);
		this.window.rootViewController = new RootViewController(new MainViewController());
		this.window.makeKeyAndVisible();
		return true;
	};
	// TNSAppDelegate.prototype.applicationDidBecomeActive = function(application) {};
	// TNSAppDelegate.prototype.applicationWillResignActive = function(application) {};
	// TNSAppDelegate.prototype.applicationDidEnterBackground = function(application) {};
	// TNSAppDelegate.prototype.applicationWillEnterForeground = function(application) {};
	// TNSAppDelegate.prototype.applicationWillTerminate = function(application) {};
	return TNSAppDelegate;
})(UIResponder);

module.exports = TNSAppDelegate;