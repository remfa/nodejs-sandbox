const SymbolEnum = require('symbol-enum');

console.log("essai SymbolEnum");

//Creates a new Enum with the specified keys.
const MyEnum = new SymbolEnum('a', 'b', 'c', 'd');


//Retrieves the symbol corresponding to the key.
const val = MyEnum.a
console.log("val.toString():" + val.toString());

//Retrieves the key corresponding to the symbol.
console.log("MyEnum[val]:" + MyEnum[val]);

//Returns an iterator that can be used to iterate through the keys.
console.log("keys iterator test");
let iterator1 = MyEnum[SymbolEnum.keys]();
let resultat1 = iterator1.next();
while (!resultat1.done) {
 console.log("while loop :" + resultat1.value); // 1 3 5 7 9
 resultat1 = iterator1.next();
}
for (let it of MyEnum[SymbolEnum.keys]())  {
console.log("forOf loop keys:" + it.toString()); // 1 3 5 7 9
}


//Returns an iterator that can be used to iterate through the values.
console.log("values iterator test");
let iterator2 = MyEnum[SymbolEnum.values]();
let resultat2 = iterator2.next();
while (!resultat2.done) {
 console.log("while loop :" + resultat2.value.toString()); 
 resultat2 = iterator2.next();
}

for (let it of MyEnum[SymbolEnum.values]())  {
console.log("forOf loop values:" + it.toString()); 
}

console.log("MyEnum.size:" + MyEnum.size.toString());

//Returns whether the enum contains the specified key.
console.log("MyEnum[SymbolEnum.has]('b'):" + MyEnum[SymbolEnum.has]('b'));// true

function enumClassHasKey(enumClass, item) {
    return enumClass[SymbolEnum.has](item);
}

console.log("enumClassHasKey(MyEnum, 'b'):" + enumClassHasKey(MyEnum, 'b'));

console.log("enumClassHasKey(MyEnum, 'f'):" + enumClassHasKey(MyEnum, 'f'));


//Returns whether the enum contains the specified value.
console.log("MyEnum[Symbol.hasValue](MyEnum.c):" + MyEnum[SymbolEnum.hasValue](MyEnum.c));// true


function enumClassHasValue(enumClass, item) {
    return enumClass[SymbolEnum.hasValue](item);
}

console.log("enumClassHasValue(MyEnum,MyEnum.c):" + enumClassHasValue(MyEnum,MyEnum.c));

console.log("enumClassHasValue(MyEnum,MyEnum.e):" + enumClassHasValue(MyEnum,MyEnum.e));
