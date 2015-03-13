exports.log = function(message) {
	android.util.Log.d('JS', message);
};

// usage: getResource('R.style.AppTheme')
exports.getResource = function(id) {
	var PACKAGE_ID = 'net.noodlecode.demo';
	var parts = id.split('.');
	var cls = java.lang.Class.forName(PACKAGE_ID + '.R$' + parts[1]);
	return cls.getDeclaredField(parts[2]).getInt(cls);
}

exports.toDip = function(value, context) {
	return value * context.getResources().getDisplayMetrics().density + 0.5;
};