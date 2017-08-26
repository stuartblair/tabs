(function() {
    'use strict';
    var expect = require('chai').expect;

    expect(add(2,3)).to.equal(5);

    function add(a,b){ return a+b; }
}());