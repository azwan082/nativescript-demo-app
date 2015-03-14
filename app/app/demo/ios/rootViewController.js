var __extends = this.__extends || require('../extends');

// root view controller
var RootViewController = (function(_super) {
	__extends(RootViewController, _super);
	function RootViewController() {
		_super.apply(this, arguments);
	}
	return RootViewController;
})(UINavigationController);

/* TODO
var _RootViewController = (function() {
	function _RootViewController(viewController) {
		var navigationController = new UINavigationController(UINavigationBar.class, UIToolbar.class);
		navigationController.setViewControllers([new MainViewController()]);
		return navigationController;
	}
	return _RootViewController;
})();
*/

module.exports = RootViewController;