const xpathSelArg = {
    "STRVALUEARRAY": 'strValueArray',
    "PARENTXPATHSEL": 'parentXpathSel',
    "MULTITXPATHSEL": 'multItXpathSel',
    "INDEXFROM1": 'indexFrom1',
    "STRVALUE": 'strValue'
  };

Object.freeze(xpathSelArg);

module.exports.xpathSelArg = xpathSelArg;


let ltest = xpathSelArg.PARENTXPATHSEL;

xpathSelArg.STRVALUE = "toto";

console.log("after change attempt in helper xpathSelArg.STRVALUE=" + xpathSelArg.STRVALUE);


