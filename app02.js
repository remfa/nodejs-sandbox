console.log("essai Object.defineProperty(Object.prototype, 'Enum', {");

Object.defineProperty(Object.prototype, 'Enum', {
    value: function () {
        for (i in arguments) {
            Object.defineProperty(this, arguments[i], {
                value: parseInt(i),
                writable: false,
                enumerable: true,
                configurable: true
            });
        }
    },
    writable: false,
    enumerable: false,
    configurable: false
});


(async () => {
    console.log("\nObject.defineProperty(Object.prototype, 'Enum'... script START\n");

    try {

        // make an object
        let eCOLORS = {};
        // call Enum on that object with the listed members
        eCOLORS.Enum('RED', 'GREEN', 'BLUE');

        console.log("\nafter eCOLORS.Enum('RED', 'GREEN', 'BLUE')\n");

        // test output via iteration
        for (e in eCOLORS) {
            console.log("for (e in eCOLORS) e:" + e + " eCOLORS[e]:" + eCOLORS[e]);
        }

        console.log("\nbefore Attempt to change the values\n");

        // Attempt to change the values
        eCOLORS.RED = 10;
        eCOLORS.GREEN = 11;
        eCOLORS.BLUE = 12;

        console.log("\nafter Attempt to change the values\n");

        // output the "new" values... notice there's no change
        for (e in eCOLORS) {
            console.log("for (e in eCOLORS) e:" + e + " eCOLORS[e]:" + eCOLORS[e]);
        }

    } catch (error) {
        console.error("`Error during Object.defineProperty(Object.prototype, 'Enum'... script execution :\n" + error);

    } finally {
        console.log("\nObject.defineProperty(Object.prototype, 'Enum'... script finally END");
    }
})();