const handler = {
    apply: function (target, thisArg, argumentsList) {
        const res = target(argumentsList[0], argumentsList[1])
        console.log(
            ' argumentsList -> ' + JSON.stringify(argumentsList)
            + ', result -> ' + JSON.stringify(res)
        );
        return res;
    }
};

module.exports = {
    handler
}

