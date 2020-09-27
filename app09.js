

const { xpathSelArg} = require('./app09-helper');

console.log("\nessai method with home made like enum obj and helper, variante pour comprendre pb completion et integration dans gauge");


console.log("xpathSelArg:" + JSON.stringify(xpathSelArg));
const queryInputXpathSelector = { [xpathSelArg.PARENTXPATHSEL] : '//input[@placeholder="Search"]'};
console.log("queryInputXpathSelector:" + JSON.stringify(queryInputXpathSelector));


let essaiB = xpathSelArg.INDEXFROM1;

let essaiA = xpathSelArg.PARENTXPATHSEL;

let essaiBisA = xpathSelArg.PARENTXPATHSEL;

console.log("essaiB (xpathSelArg.INDEXFROM1)=" + essaiB);

console.log("essaiA  (xpathSelArg.PARENTXPATHSEL)=" + essaiA);

console.log("essaiBisA (xpathSelArg.PARENTXPATHSEL)=" + essaiBisA);

console.log("essaiBisA=essaiA:" + (essaiBisA==essaiA));

console.log("essaiB=essaiA:" + (essaiB==essaiA));

xpathSelArg.STRVALUE = "tutu";

console.log("after change attempt in app xpathSelArg.STRVALUE=" + xpathSelArg.STRVALUE);

essaiA = "tata";

console.log("after change attempt in app essaiA=" + essaiA);

