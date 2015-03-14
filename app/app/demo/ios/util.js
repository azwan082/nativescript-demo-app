exports.getHashCode = function(obj) {
	return obj.toString().match(/\:(.*?)\;/)[1].trim();
};