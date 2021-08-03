
exports.min = function min (array) {
	console.log(array);
	//console.log('njj' + array.length);
	if (array == undefined) {return 0;}
	if ((array.length !== 0) && (array !== undefined)) {
	var m = array[0];
		for (var i = 0; i < array.length; i++) {
			if (m > array[i]) {
				m = array[i];
			}
		}
		return m;
	}
	return 0;
}

exports.max = function max (array) {
		if (array === undefined) {return 0}
	if (array.length !== 0) {
	var m = array[0];
		for (var i = 0; i < array.length; i++) {
			if (m < array[i]) {
				m = array[i];
			}
		}
		return m;
	}
  return 0;
}

exports.avg = function avg (array) {
		if (array === undefined) {return 0}
		if (array.length !== 0) {
	var m = 0;
		for (var i = 0; i < array.length; i++) {
			m = m+array[i];
		}
		return (m/array.length);
	}
  return 0;
}
