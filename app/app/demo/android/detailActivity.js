var __extends = this.__extends || require('../extends');
var util = require('./util');

var DetailActivity = (function(_super) {
	__extends(DetailActivity, _super);
	function DetailActivity() {
		_super.apply(this, arguments);
	}
	DetailActivity.ITEM_ID = 'item_id';
	DetailActivity.prototype.onCreate = function(savedInstanceState) {
		_super.prototype.onCreate.call(this, savedInstanceState);
		
		this.setTheme(util.getResource('R.style.AppTheme'));
		this.setTitle('Detail Activity');
		
		var actionBar = this.getActionBar();
		actionBar.setHomeButtonEnabled(true);
		actionBar.setDisplayHomeAsUpEnabled(true);
		
		var value = this.getIntent().getStringExtra(DetailActivity.ITEM_ID);
		
		var LayoutParams = android.view.ViewGroup.LayoutParams;
		var layout = new android.widget.RelativeLayout(this);
		layout.setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
		layout.setGravity(android.view.Gravity.CENTER);
		var label = new android.widget.TextView(this);
		label.setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
		label.setGravity(android.view.Gravity.CENTER);
		label.setText(value);
		layout.addView(label);
		this.setContentView(layout);
	};
	DetailActivity.prototype.onMenuItemSelected = function(featureId, item) {
		if (item.getItemId() == android.R.id.home) {
			this.finish();
			return true;
		}
		return false;
	};
	return DetailActivity;
})(com.tns.NativeScriptActivity);

module.exports = DetailActivity;