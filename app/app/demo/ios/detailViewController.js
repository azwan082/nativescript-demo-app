var __extends = this.__extends || require('../extends');

// detail view controller
var DetailViewController = (function(_super) {
	__extends(DetailViewController, _super);
	function DetailViewController(value) {
		_super.apply(this, arguments);
	}
	DetailViewController.prototype.viewDidLoad = function() {
		console.log('DetailViewController viewDidLoad, value = ', this.value);
		this.title = 'Detail Page';
		this.view = new UIView();
		this.view.backgroundColor = UIColor.whiteColor();
		var label = new UILabel();
		label.setTranslatesAutoresizingMaskIntoConstraints(false);
		label.text = this.value;
		label.textColor = UIColor.blackColor();
		
		function toNSDictionary(dict) {
			var keys = [];
			var values = [];
			for (var n in dict) {
				keys.push(n);
				values.push(dict[n]);
			}
			return NSDictionary.dictionaryWithObjectsForKeys(values, keys);
		}

		var viewsDict = toNSDictionary({
			superview: this.view,
			label: label
		});

		// width & height constraints are set to the target view
		// set width = 100pt
		// boxA.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews('H:[boxA(100)]', 0, null, viewsDict));

		// set height = 100pt
		// boxA.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews('V:[boxA(100)]', 0, null, viewsDict));

		this.view.addSubview(label);

		// spacing constraints are set to the superview, bcos it's the superview's responsibility to assign 
		// position of its child views. Must add child views to superview prior to set these constraints
		// "H:|-30-[boxA]" = boxA has 30pt spacing from the left side of superview
		// "H:[boxA]-30-|" = boxA has 30pt spacing from the right side of superview
		// "H:|-[boxA]" = use default spacing
		// this.view.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews('H:|-30-[boxA]', 0, null, viewsDict));

		// "V:|-30-[boxA]" = boxA has 30pt spacing from the top of superview
		// "V:[boxA]-30-|" = boxA has 30pt spacing from the bottom of superview
		// this.view.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews('V:|-30-[boxA]', 0, null, viewsDict));

		// centering a view in a superview
		// https://github.com/evgenyneu/center-vfl
		this.view.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews('V:[superview]-(<=1)-[label]', NSLayoutFormatOptions.NSLayoutFormatAlignAllCenterX, null, viewsDict));
		this.view.addConstraints(NSLayoutConstraint.constraintsWithVisualFormatOptionsMetricsViews('H:[superview]-(<=1)-[label]', NSLayoutFormatOptions.NSLayoutFormatAlignAllCenterY, null, viewsDict));

		// this.view.addConstraint(NSLayoutConstraint.constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant(
		// 	boxA,
		// 	NSLayoutFormatOptions.NSLayoutAttributeCenterX,
		// 	NSLayoutFormatOptions.NSLayoutRelationEqual,
		// 	this.view,
		// 	NSLayoutFormatOptions.NSLayoutAttributeCenterX,
		// 	1,
		// 	0
		// ));

		// this.view.addSubview(boxB);
	};
	return DetailViewController;
})(UIViewController);

module.exports = DetailViewController;