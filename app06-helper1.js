function traceMethodCalls(obj) {
    const handler = {
        get(target, propKey, receiver) {
            const origMethod = target[propKey];
            return function (...args) {
                const result = origMethod.apply(this, args);
                console.log(
                    target["libName"]
                    + "." + propKey + JSON.stringify(args)
                    + ' -> ' + JSON.stringify(result)
                );
                return result;
            };
        }
    };
    return new Proxy(obj, handler);
}


module.exports = {
    traceMethodCalls
}

