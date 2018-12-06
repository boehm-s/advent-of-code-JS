var input = document.getElementsByTagName('pre')[0].innerHTML.split("\n");
var counter2 = 0;
var counter3 = 0;

input.forEach(str => {
    var letterCounts = str.split("").reduce((acc, val) => {
	if (!acc[val]) acc[val] = 1;
	else acc[val]++;
	return acc;
    }, {});
    var counts = Object.values(letterCounts);
    var counts23 = counts.filter(n => n == 2 || n == 3);
    var withoutDuplicated = [...new Set(counts23)];
    if (withoutDuplicated.includes(2)) counter2++;
    if (withoutDuplicated.includes(3)) counter3++;
});

var res = counter2 * counter3;
