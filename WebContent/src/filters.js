app.filter("hunPrice", function($rootScope, StorageConstants) {
	return function(value) {
		if (angular.isNumber(value)) {
			var full = value.toString();
			var out = "";
			var c = 0;
			var i;
			for (i = (full.length - 1); i >= 0; i--) {
				out += full.charAt(i);
				c++;
				if (c === 3) {
					out += " ";
					c = 0;
				}
			}
			return reverse(out) + " Ft";
		} else {
			var v = value;
			if ($rootScope.lang == StorageConstants.lang_eng) {
				v = v.replace("darab", "piece");
				v = v.replace("db", "piece");
				v = v.replace("felület", "surface");
			}
			return v;
		}
	};
});

function reverse(s) {
	for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {
	}
	return o;
}