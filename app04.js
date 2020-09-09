
const { defineEnum, enumClassSize, enumClassHasKey, enumClassHasValue, enumKeysForLoop, enumItemsForLoop } = require('./app04-helper');

console.log("essai SymbolEnum with helper");

//Creates a new Enum with the specified keys.
const MyOwnEnum = defineEnum('a', 'b', 'c', 'd');

//Retrieves the symbol corresponding to the key.
const val = MyOwnEnum.a
console.log("MyOwnEnum.a.toString():" + MyOwnEnum.a.toString());

//Retrieves the key corresponding to the symbol.
console.log("MyOwnEnum[val]:" + MyOwnEnum[val]);

enumKeysForLoop(MyOwnEnum, function (x) { console.log("enumKeysForLoop x:" + x); })

enumItemsForLoop(MyOwnEnum, function (x) { console.log("enumItemsForLoop x:" + x.toString()); })

console.log("enumClassSize(MyOwnEnum):" + enumClassSize(MyOwnEnum));

console.log("enumClassHasKey(MyOwnEnum, 'b'):" + enumClassHasKey(MyOwnEnum, 'b'));

console.log("enumClassHasKey(MyOwnEnum, 'f'):" + enumClassHasKey(MyOwnEnum, 'f'));

console.log("enumClassHasValue(MyOwnEnum,MyOwnEnum.c):" + enumClassHasValue(MyOwnEnum,MyOwnEnum.c));

console.log("enumClassHasValue(MyOwnEnum,MyOwnEnum.e):" + enumClassHasValue(MyOwnEnum,MyOwnEnum.e));
