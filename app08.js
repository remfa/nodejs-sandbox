
const likeEnumImport = require("./app08-helper");

console.log("essai method with home made like enum obj and helper");

Object.freeze(likeEnumImport);

console.log("likeEnumImport=" + JSON.stringify(likeEnumImport));

console.log("likeEnumImport.enumB=" + likeEnumImport.enumB);

const essaiB = likeEnumImport.enumB;

let essaiA = likeEnumImport.enumA;

const essaiBisA = likeEnumImport.enumA;

console.log("essaiB (likeEnumImport.enumB)=" + essaiB);

console.log("essaiA  (likeEnumImport.enumA)=" + essaiA);

console.log("essaiBisA (likeEnumImport.enumBisA)=" + essaiBisA);

console.log("essaiBisA=essaiA:" + (essaiBisA==essaiA));

console.log("essaiB=essaiA:" + (essaiB==essaiA));

likeEnumImport.enumA = 10;

console.log("after change attempt likeEnumImport.enumA=" + likeEnumImport.enumA);

essaiA = 11;

console.log("after change attempt essaiA=" + essaiA);

