const handler = {
    apply: function (target, thisArg, args) {
        const res = Reflect.apply(target, undefined, args);
        console.log(
            ' args -> ' + JSON.stringify(args)
            + ', result -> ' + JSON.stringify(res)
        );
        return res;
    }
};

module.exports = {
    handler
}

