var __extends = this.__extends || require('../extends');
var util = require('./util');

var ItemTemplate = (function() {
	function ItemTemplate(context) {
		this._context = context;
		this._holders = {};
	}
	ItemTemplate.prototype.getView = function(value, convertView, parent) {
		if (!convertView) {
			var inflater = this._context.getSystemService(android.content.Context.LAYOUT_INFLATER_SERVICE);
			convertView = inflater.inflate(util.getResource('R.layout.item_main'), parent, false);
			var label = convertView.findViewById(util.getResource('R.id.item_textview'));
			this._holders[convertView.hashCode()] = { label: label };
		}
		var holder = this._holders[convertView.hashCode()];
		holder.label.setText(value);
		return convertView;
	};
	return ItemTemplate;
})();

var MainAdapter = (function(_super) {
	__extends(MainAdapter, _super);
	function MainAdapter(context) {
		_super.call(this);
		this._context = context;
		this._values = require('../dataSet').countries;
		this._template = new ItemTemplate(this._context);
		return global.__native(this); // required, so that other methods below can access instance properties (_context, _values, etc.)
	}
	MainAdapter.prototype.getCount = function() {
		return this._values.length;
	};
	MainAdapter.prototype.getItem = function(position) {
		return this._values[position];
	};
	MainAdapter.prototype.getItemId = function(position) {
		return long(position);
	};
	MainAdapter.prototype.hasStableIds = function() {
		return true;
	};
	MainAdapter.prototype.getView = function(position, convertView, parent) {
		return this._template.getView(this._values[position], convertView, parent);
	};
	return MainAdapter;
})(android.widget.BaseAdapter);

module.exports = MainAdapter;