(function() {
    'use strict';
    var assert = require('chai').assert;

    assert.equal(add(2,3), 5);

    function add(a,b){ return a+b; }
}());