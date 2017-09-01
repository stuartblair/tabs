/* global jake, complete, desc, task, console, fail */
(function () {
    'use strict';

    const KARMA_CONFIG = 'karma.conf.js';
    var semver = require('semver');
    var karma = require('simplebuild-karma');

    /* General tasks */

    desc('Start the Karma server (run this first)');
    task('karma', function(){
        console.log('Starting karma server');
        karma.start({configFile: KARMA_CONFIG}, complete, fail);
    }, {async: true});

    desc('This is the default build');
    task('default', ['version', 'lint', 'test'], function () {
        console.log('\n\nBUILD OK');
    });

    desc('Run a localhost server');
    task('run', function() {
        console.log('Run http server');
        jake.exec('node node_modules/http-server/bin/http-server src', { interactive: true }, complete);
    });

    /* Supporting tasks */

    desc('Check Node version');
    task('version', function () {
        var expectedVersion = '6.11.2';
        var packageJson = require('./package.json');
        var actualVersion = packageJson.engines.node;
        if (semver.neq(actualVersion, expectedVersion)) {
            fail('Incorrect version of Node: expected ' +
                expectedVersion +
                ', but found version ' +
                actualVersion
            );
        }
    });

    desc('Lint JavaScript code');
    task('lint', function () {
        process.stdout.write('Linting JavaScript: ');
        jake.exec('node node_modules/.bin/eslint \'**/*.js\'', {interactive: true}, complete);
    }, { async: true });

    desc('Run JavaScript tests');
    task('test', function() {
        console.log('Running JavaScript tests');
        karma.run({
            configFile: KARMA_CONFIG,
            expectedBrowsers: [
                'Firefox 55.0.0 (Ubuntu 0.0.0)',
                'PhantomJS 2.1.1 (Linux 0.0.0)',
                'Chrome 60.0.3112 (Linux 0.0.0)'
            ],
            strict: !process.env.loose
        }, complete, fail);
    }, { async: true});
}());