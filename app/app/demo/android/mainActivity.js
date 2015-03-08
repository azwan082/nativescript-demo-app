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
		var FRAME_ID = 1000;
		var layout = new android.widget.FrameLayout(this);
		layout.setId(FRAME_ID);
		var LayoutParams = android.view.ViewGroup.LayoutParams;
		this.setContentView(layout, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
		if (!savedInstanceState) {
			this.getFragmentManager().beginTransaction().add(FRAME_ID, new MainFragment()).commit();
		}
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
	MainActivity.prototype.onOptionsItemSelected = function(menuItem) {
		return false;
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