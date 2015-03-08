// var application = require("application");
// application.mainModule = "app/main-page";
// application.start();
var Application = require('./demo/android/application');

// start app
var application;
app.init({
	getActivity: function(intent) {
		return application.getActivity(intent);
	},
	onCreate: function() {
		application = new Application(this);
		application.init();
	}
})