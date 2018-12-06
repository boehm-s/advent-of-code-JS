var input = document.getElementsByTagName('pre')[0].innerHTML
    .split("\n")
    .filter(str => str != "")
    .map(str => parseInt(str));


// to refacto
var res = null, i = 0, sum = 0, arr = [];
while (res == null) {
  sum += input[i];
  if (arr.includes(sum))
    res = sum;
  arr.push(sum);
  i++;
  if (i == input.length)
    i = 0;
}
