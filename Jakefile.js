(function () {
    "use strict";

    let EXPECTED_NODE_VERSION = "v7.4.0"

    desc("This is the default build")
    task("default", function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function () {
        let actualVersion = process.version;
        if (actualVersion !== EXPECTED_NODE_VERSION) {
            fail("Incorrect version of Node: expected " +
                EXPECTED_NODE_VERSION +
                ", but found version " +
                actualVersion
            );
        }
        console.log("Expected Node version found: " + EXPECTED_NODE_VERSION);
    });

}());