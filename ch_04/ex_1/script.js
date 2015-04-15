/**
 * Created by adambartosiewicz on 13/04/15.
 */
var eJS = {};

eJS.range = function (start, end) {
	var tab = [],
		step = 1,
		counter = end - start,
		tempValue = start;
	if (arguments[2]) {
		step = arguments[2];

	}
	if (start > end && step < 0) {
		for (var i = start; i >= end; i += step) {
			tab.push(tempValue);
			tempValue += step;
		}
	}
	else if (start < end && step > 0) {
		for (var i = start; i <= end; i += step) {
			tab.push(tempValue);
			tempValue += step;
		}
	}
	else {
		return false;
	}

	return tab;
};

eJS.sum = function (tab) {
	if (tab) {
		var tempValue = 0;
		for (var i = 0; i < tab.length; i++) {
			tempValue += tab[i];
		}
		return tempValue;
	}
	else {
		return false;
	}


}
eJS.reverseArray = function (array) {
	if (array) {
		var tempArray = [];
		for (var i = array.length - 1; i >= 0; i--) {
			tempArray.push(array[i]);
		}
		return tempArray;
	}
	else {
		return false;
	}

};
eJS.reverseArrayInPlace = function (array) {

	if (array) {
		var first = 0,
			last = 0,
			odd = false,
			counter = Math.floor(array.length / 2);
		if ((array.length) % 2 != 0) {
			odd = true;
		}
		for (var i = 0; i <= counter; i++) {
			first = array[i];
			array[i] = array[array.length - 1 - i];
			array[array.length - 1 - i] = first;
		}
		return array;
	}
	else {
		return false;
	}
}

eJS.prepend = function (list, item) {
	list = {
		value: item,
		rest: list
	}
	return list;
}
eJS.arrayToList = function (array) {
	if (array) {
		var list = null;
		for (var i = array.length; i >= 0; i--) {
			list = eJS.prepend(list, array[i]);
		}
		return list;
	}
	else {
		return null;
	}
}
eJS.listToArray = function (list) {
	if (list) {
		var array = [];
		for (var item = list; item.value; item = item.rest) {
			array.push(item.value);
		}
		return array;
	}
	else {
		return null;
	}
}
eJS.nth = function (list, index) {

}
eJS.deepEqual = function deepEqual(a, b) {
	if (a === b) return true;

	if (a == null || typeof a != "object" ||
		b == null || typeof b != "object")
		return false;

	var propsInA = 0, propsInB = 0;

	for (var prop in a)
		propsInA += 1;

	for (var prop in b) {
		propsInB += 1;
		if (!(prop in a) || !deepEqual(a[prop], b[prop]))
			return false;
	}

	return propsInA == propsInB;
}
