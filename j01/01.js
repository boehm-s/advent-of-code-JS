document.getElementsByTagName('pre')[0].innerHTML
    .split("\n")
    .filter(str => str != "")
    .map(str => parseInt(str))
    .reduce((pv, cv) => pv + cv, 0);
