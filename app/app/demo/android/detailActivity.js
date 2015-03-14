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

		this.setContentView(util.getResource('R.layout.activity_detail'));
		var label = this.findViewById(util.getResource('R.id.detail_textview'));
		label.setText(value);
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