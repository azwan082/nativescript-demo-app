var __extends = this.__extends || require('../extends');
var DetailViewController = require('./detailViewController');

// main view controller
var MainViewController = (function(_super) {
	__extends(MainViewController, _super);
	function MainViewController() {
		_super.apply(this, arguments);
	}
	MainViewController.prototype.viewDidLoad = function() {
		_super.prototype.viewDidLoad.call(this);
		this.title = 'Main Page';
		this.data = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	};
	MainViewController.prototype.tableViewCellForRowAtIndexPath = function(tableView, indexPath) {
		var reuseId = 'cell';
		var cell = tableView.dequeueReusableCellWithIdentifier(reuseId);
		if (!cell) {
			cell = new UITableViewCell(UITableViewCellStyle.UITableViewCellStyleDefault, reuseId);
		}
		cell.textLabel.text = this.data[indexPath.row];
		return cell;
	};
	MainViewController.prototype.tableViewNumberOfRowsInSection = function(tableView, section) {
		return this.data.length;
	};
	MainViewController.prototype.tableViewDidSelectRowAtIndexPath = function(tableView, indexPath) {
		var value = this.data[indexPath.row];
		var viewController = new DetailViewController();
		viewController.value = value;
		this.navigationController.pushViewControllerAnimated(viewController, true);
	};
	return MainViewController;
})(UITableViewController);

module.exports = MainViewController;