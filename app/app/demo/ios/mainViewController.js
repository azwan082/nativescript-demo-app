var __extends = this.__extends || require('../extends');
var DetailViewController = require('./detailViewController');
var util = require('./util');

// main view controller
var MainViewController = (function(_super) {
	__extends(MainViewController, _super);
	function MainViewController() {
		_super.apply(this, arguments);
	}
	MainViewController.prototype.viewDidLoad = function() {
		_super.prototype.viewDidLoad.call(this);
		this._holders = {};
		this._data = require('../dataSet').countries;
		this.title = 'Main Page';
		var sysverBtn = new UIBarButtonItem(UIBarButtonSystemItem.UIBarButtonSystemItemAction, this, 'onSysVerBtnClick');
		this.navigationItem.rightBarButtonItems = [sysverBtn];
		
	};
	MainViewController.prototype.onSysVerBtnClick = function(sender) {
		console.log('onSysVerBtnClick()');
		var alert = new UIAlertView();
		alert.title = 'System version';
		alert.message = UIDevice.currentDevice().systemName + ' ' + UIDevice.currentDevice().systemVersion;
		alert.addButtonWithTitle('OK');
		alert.cancelButtonIndex = 0;
		alert.show();
	};
	MainViewController.prototype.tableViewCellForRowAtIndexPath = function(tableView, indexPath) {
		var reuseId = 'main_cell'; // must be same value as in xib file
		var cell = tableView.dequeueReusableCellWithIdentifier(reuseId);
		if (!cell) {
			cell = NSBundle.mainBundle().loadNibNamedOwnerOptions('MainTableViewCell', this, null)[0];
			// anyone know better way than this? such as access element by id
			this._holders[util.getHashCode(cell)] = {
				title: cell.contentView.subviews[0],
				note: cell.contentView.subviews[1]
			};
		}
		var holder = this._holders[util.getHashCode(cell)];
		holder.title.text = this._data[indexPath.row];
		holder.note.text = 'Row ' + indexPath.row;
		return cell;
	};
	MainViewController.prototype.tableViewNumberOfRowsInSection = function(tableView, section) {
		return this._data.length;
	};
	MainViewController.prototype.tableViewDidSelectRowAtIndexPath = function(tableView, indexPath) {
		var value = this._data[indexPath.row];
		var viewController = new DetailViewController();
		viewController.value = value;
		this.navigationController.pushViewControllerAnimated(viewController, true);
	};
	MainViewController.ObjCExposedMethods = {
        onSysVerBtnClick: {
        	returns: interop.types.void,
        	params: [interop.types.id]
    	}
    };
	return MainViewController;
})(UITableViewController);

module.exports = MainViewController;