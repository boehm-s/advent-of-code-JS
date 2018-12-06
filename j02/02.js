var input = document.getElementsByTagName('pre')[0].innerHTML.split("\n");
var res = input
    .map(str => input
	 .filter(str2 => str
		 .split("")
		 .filter((c, i) => c != str2.split("")[i]).length == 1)
	)
    .filter(arr => arr.length > 0)
    .reduce((acc, val) => [...acc, val[0]], [])
    .reduce(
	(acc, val, i) => i == 0
	    ? val
	    : acc.split("")
	        .filter((c, i) => c == val[i])
	        .join("")
    );
