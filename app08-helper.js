// likeEnum = freeze({"enumA":1, "enumB":2, "enumC":3, "enumD":4});
likeEnum = {"enumA":1, "enumB":2, "enumC":3, "enumD":4};


function freeze(obj) {
    Object.freeze(obj);
    return obj;
}

module.exports = likeEnum;



