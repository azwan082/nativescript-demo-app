var __extends = this.__extends || require('../extends');
var MainAdapter = require('./mainAdapter');
var DetailActivity = require('./detailActivity');

// main fragment
var MainFragment = (function(_super) {
	__extends(MainFragment, _super);
	function MainFragment() {
		_super.apply(this, arguments);
	}
	// MainFragment.prototype.onCreated = function() {
	// 	_super.prototype.onCreated.call(this);
	// };
	MainFragment.prototype.onCreateView = function(inflater, container, savedInstanceState) {
		var activity = this.getActivity();
		var listView = new android.widget.ListView(activity);
		var adapter = new MainAdapter(activity);
		listView.setAdapter(adapter);
		listView.setOnItemClickListener(new android.widget.AdapterView.OnItemClickListener({
			onItemClick: function(parent, view, position, id) {
				var value = adapter.getItem(position);
				var intent = new android.content.Intent(activity, com.tns.NativeScriptActivity.class);
				// intent.setAction(android.content.Intent.ACTION_DEFAULT);
				intent.Action = android.content.Intent.ACTION_DEFAULT;
				intent.putExtra('DetailActivity', 1);
				intent.putExtra(DetailActivity.ITEM_ID, value);
				activity.startActivity(intent);
			}
		}));
		var layout = new android.widget.RelativeLayout(activity);
		var LayoutParams = android.view.ViewGroup.LayoutParams;
		layout.addView(listView, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));
		return layout;
	};
	return MainFragment;
})(android.app.Fragment);

module.exports = MainFragment;