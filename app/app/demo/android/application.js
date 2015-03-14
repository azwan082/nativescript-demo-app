var MainActivity = require('./mainActivity');
var DetailActivity = require('./detailActivity');
var util = require('./util');

var Application = (function() {
	function Application(nativeApp) {
		this.app = nativeApp;
		try {
			var config = android.view.ViewConfiguration.get(nativeApp);
			var menuKeyField = android.view.ViewConfiguration.class.getDeclaredField('sHasPermanentMenuKey');
			if (menuKeyField) {
				menuKeyField.setAccessible(true);
				menuKeyField.setBoolean(config, false);
			}
		} catch (ex) {
			util.log('ERROR:' + ex.message);
		}
	}
	Application.prototype.init = function() {
		this.app.registerActivityLifecycleCallbacks(new android.app.Application.ActivityLifecycleCallbacks({
			onActivityCreated: function(activity, savedInstanceState) {},
			onActivityDestroyed: function(activity) {
				gc();
			},
			onActivityPaused: function(activity) {},
			onActivityResumed: function(activity) {},
			onActivitySaveInstanceState: function(activity, outState) {},
			onActivityStarted: function(activity) {},
			onActivityStopped: function(activity) {}
		}));
	};
	Application.prototype.getActivity = function(intent) {
		if (intent.getAction() == android.content.Intent.ACTION_MAIN) {
			return MainActivity;
		}
		else if (intent.hasExtra('DetailActivity')) {
			return DetailActivity;
		}
		else {
			util.log('Cannot create activity');
		}
	};
	return Application;
})();

module.exports = Application;