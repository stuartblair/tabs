(function () {
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");

    desc("This is the default build");
    task("default", ["version", "lint"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function () {
        var expectedVersion = "6.11.2";
        var packageJson = require("./package.json");
        var actualVersion = packageJson.engines.node;
        if (semver.neq(actualVersion, expectedVersion)) {
            fail("Incorrect version of Node: expected " +
                expectedVersion +
                ", but found version " +
                actualVersion
            );
        }
    });

    desc("Lint JavaScript code");
    task("lint", function () {
        process.stdout.write("Linting JavaScript: ");
    });
}());