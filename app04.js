
const { defineEnum, enumClassSize, enumClassHasKey, enumClassHasValue, enumKeysMap, enumKeysFilter, enumKeysReduce, enumItemsMap, enumItemsFilter, enumItemsReduce } = require('./app04-helper');

console.log("essai SymbolEnum with helper");

//Creates a new Enum with the specified keys.
const MyOwnEnum = defineEnum('a', 'b', 'c', 'd');

//Retrieves the symbol corresponding to the key.
const val = MyOwnEnum.a
console.log("MyOwnEnum.a.toString():" + MyOwnEnum.a.toString());

//Retrieves the key corresponding to the symbol.
console.log("MyOwnEnum[val]:" + MyOwnEnum[val]);


enumKeysMap(MyOwnEnum, function (x) { console.log("enumKeysMap x:" + x); })

console.log("keyFilterOnaNc:" + enumKeysFilter(MyOwnEnum, (x) => ['a','c'].includes(x)));

console.log("keyConcatenation:" + enumKeysReduce(MyOwnEnum, (a,b) => a + b, ""));

enumItemsMap(MyOwnEnum, function (x) { console.log("enumItemsMap x:" + x.toString()); })

enumItemsFilter(MyOwnEnum, (x) => [MyOwnEnum.b, MyOwnEnum.d].includes(x)).map((x) => console.log("enumItemsFilter x:" + x.toString()));

console.log("itemsConcatenation:" + enumItemsReduce(MyOwnEnum, (a,b) => a.toString() + b.toString(), ""));

console.log("enumClassSize(MyOwnEnum):" + enumClassSize(MyOwnEnum));

console.log("enumClassHasKey(MyOwnEnum, 'b'):" + enumClassHasKey(MyOwnEnum, 'b'));

console.log("enumClassHasKey(MyOwnEnum, 'f'):" + enumClassHasKey(MyOwnEnum, 'f'));

console.log("enumClassHasValue(MyOwnEnum,MyOwnEnum.c):" + enumClassHasValue(MyOwnEnum,MyOwnEnum.c));

console.log("enumClassHasValue(MyOwnEnum,MyOwnEnum.e):" + enumClassHasValue(MyOwnEnum,MyOwnEnum.e));
