const {handler} = require('./app07-helper1');

const sumo = function sumOrig(a, b) {
    return a + b;
}

const multo = function multOrig(a, b) {
    return a * b;
}

module.exports = {
    sum: new Proxy(sumo, handler),
    mult : new Proxy(multo, handler)
}

