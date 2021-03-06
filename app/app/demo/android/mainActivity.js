var __extends = this.__extends || require('../extends');
var util = require('./util');
var MainFragment = require('./mainFragment');

// main activity
var MainActivity = (function(_super) {
	__extends(MainActivity, _super);
	function MainActivity() {
		_super.apply(this, arguments);
	}
	MainActivity.prototype.onCreate = function(savedInstanceState) {
		_super.prototype.onCreate.call(this, savedInstanceState);
		this.setTheme(util.getResource('R.style.AppTheme'));
		this.setTitle('Main Activity');
		this.setContentView(util.getResource('R.layout.activity_main'));
		if (!savedInstanceState) {
			this.getFragmentManager().beginTransaction().add(util.getResource('R.id.main_frame'), new MainFragment()).commit();
		}
	};
	MainActivity.prototype.onCreateOptionsMenu = function(menu) {
		this.getMenuInflater().inflate(util.getResource('R.menu.main'), menu);
		return true;
	};
	MainActivity.prototype.onOptionsItemSelected = function(menuItem) {
		var id = menuItem.getItemId();
		if (id == util.getResource('R.id.menu_sysver')) {
			new android.app.AlertDialog.Builder(this)
				.setTitle('System version')
				.setMessage('Release: ' + android.os.Build.VERSION.RELEASE + "\nAPI level: " + android.os.Build.VERSION.SDK_INT)
				.setPositiveButton('OK', new android.content.DialogInterface.OnClickListener({
					onClick: function(dialog, which) {}
				}))
				.show();
			return true;
		}
		return false;
	};
	MainActivity.prototype.onActivityResult = function(requestCode, resultCode, data) {
        _super.prototype.onActivityResult.call(this, requestCode, resultCode, data);
    };
    MainActivity.prototype.onAttachFragment = function(fragment) {
        _super.prototype.onAttachFragment.call(this, fragment);
    };
	MainActivity.prototype.onStart = function() {
		_super.prototype.onStart.call(this);
	};
	MainActivity.prototype.onStop = function() {
		_super.prototype.onStop.call(this);
	};
	MainActivity.prototype.onDestroy = function() {
		_super.prototype.onDestroy.call(this);
	};
    MainActivity.prototype.onBackPressed = function () {
        _super.prototype.onBackPressed.call(this);
    };
	MainActivity.prototype.onLowMemory = function() {
		gc();
		java.lang.System.gc();
		_super.prototype.onLowMemory.call(this);
	};
	MainActivity.prototype.onTrimMemory = function(level) {
		gc();
		java.lang.System.gc();
		_super.prototype.onTrimMemory.call(this, level);
	};
	return MainActivity;
})(com.tns.NativeScriptActivity);

module.exports = MainActivity;