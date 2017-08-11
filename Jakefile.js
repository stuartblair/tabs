/* global jake, complete, desc, task, console, fail */
(function () {
    "use strict";

    var semver = require("semver");

    /* General tasks */

    desc("This is the default build");
    task("default", ["version", "lint"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Run a localhost server");
    task("run", function() {
        console.log("Run http server");
        jake.exec("node node_modules/httpserver/httpserver", { interactive: true }, complete);
    });
    /* Stuart - need to make sure there's an option to exec this in the context of the dir containing the html */

    /* Supporting tasks */

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
        jake.exec("node node_modules/.bin/eslint \"**/*.js\"", {interactive: true}, complete);
    }, { async: true });
}());