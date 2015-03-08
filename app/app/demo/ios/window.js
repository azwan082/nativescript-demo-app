var __extends = this.__extends || require('../extends');

// window
var Window = (function(_super) {
	__extends(Window, _super);
	function Window() {
		_super.apply(this, arguments);
	}
	Window.prototype.initWithFrame = function(frame) {
		var window = _super.prototype.initWithFrame.call(this, frame);
		if (window) {
			window.autoresizingMask = UIViewAutoresizing.UIViewAutoresizingNone;
			window.backgroundColor = UIColor.whiteColor();
		}
		return window;
	};
	return Window;
})(UIWindow);

module.exports = Window;