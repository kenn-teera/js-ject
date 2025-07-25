const langs = ["HTML","CSS","Java"]; //array literal
console.log(langs);
console.log(langs.length); //check array long
console.log(langs[0]);
console.log(langs[0].length); //how string long
langs[0] = 100
console.log(langs[0]);

const allname = new Array("K","E","N");
console.log(allname);
allname.push("N");
console.log(allname);
allname.pop();
console.log(allname);
allname.shift();
console.log(allname);
allname.unshift("K");
console.log(allname);

const concatArrays = langs.concat(allname)
console.log(concatArrays)