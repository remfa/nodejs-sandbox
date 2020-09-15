const SymbolEnum = require('symbol-enum');

//////////////// v1 start

// exports.defineEnum = (...keys) => {
//     return new SymbolEnum(...keys);
// };

//////////////// v1 end



//////////////// v2 start

function logger(className) {
    return new Proxy(new className(), {
        get: function (target, name, receiver) {
            if (!target.hasOwnProperty(name)) {
                if (typeof target[name] === "function") {
                    console.log(
                        "Calling Method : ",
                        name,
                        "|| on : ",
                        target.constructor.name
                    );
                }
                return new Proxy(target[name], this);
            }
            return Reflect.get(target, name, receiver);
        }
    });
}


module.exports = {
    logger
}

//////////////// v2 end