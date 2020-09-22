const {handler} = require('./app07-helper1');

const sumo = function(a, b) {
    return a + b;
}

const multo = function(a, b) {
    return a * b;
}

const squaro = function(a) {
    return a * a;
}

module.exports = {
    sum: new Proxy(sumo, handler),
    mult : new Proxy(multo, handler),
    square : new Proxy(squaro, handler)
}

