const SymbolEnum = require('symbol-enum');

//////////////// v1 start

// exports.defineEnum = (...keys) => {
//     return new SymbolEnum(...keys);
// };

// exports.enumClassSize = (enumClass) => {
//     return enumClass.size;
// };

// exports.enumClassHasKey = (enumClass, enumKey) => {
//     return enumClass[SymbolEnum.has](enumKey);
// };

// exports.enumClassHasValue = (enumClass, enumItem) => {
//     return enumClass[SymbolEnum.hasValue](enumItem);
// };

// exports.enumKeysForLoop = (enumClass, callback) => {
//     for (let it of enumClass[SymbolEnum.keys]()) {
//         // console.log("enumKeysForLoop key:" + it);
//         callback(it);
//     }
// };

// exports.enumItemsForLoop = (enumClass, callback) => {
//     for (let it of enumClass[SymbolEnum.values]()) {
//         // console.log("enumKeysForLoop key:" + it);
//         callback(it);
//     }
// };

//////////////// v1 end



//////////////// v2 start

function defineEnum(...keys) {
    return new SymbolEnum(...keys);
}

function enumClassSize(enumClass) {
    return enumClass.size;
}

function enumClassHasKey(enumClass, enumKey) {
    return enumClass[SymbolEnum.has](enumKey);
}

function enumClassHasValue(enumClass, enumItem) {
    return enumClass[SymbolEnum.hasValue](enumItem);
}

function enumKeysForLoop(enumClass, callback) {
    for (let it of enumClass[SymbolEnum.keys]()) {
        // console.log("enumKeysForLoop key:" + it);
        callback(it);
    }
}

function enumItemsForLoop(enumClass, callback) {
    for (let it of enumClass[SymbolEnum.values]()) {
        // console.log("enumKeysForLoop key:" + it);
        callback(it);
    }
}

module.exports = {
    defineEnum,
    enumClassSize,
    enumClassHasKey,
    enumClassHasValue,
    enumKeysForLoop,
    enumItemsForLoop
}

//////////////// v2 end