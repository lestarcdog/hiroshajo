app.filter("hunPrice", function() {
	return function(value) {
		if ($.isNumeric(value)) {
			var full = value.toString();
			var out = "";
			var c=0;
			for (i = full.length-1; i >=0; i--) {
				out += full.charAt(i);
				c++;
				if (c === 3) {
					out += " ";
					c = 0;
				}
			}
			return reverse(out);
		} else {
			return value;
		}
	}
});

function reverse(s) {
	for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {
	}
	return o;
}