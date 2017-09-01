(function() {
    'use strict';
    var expect = require('chai').expect;

    describe('add', function() {
        it('sums its operands', function() {
            expect(add(2, 3)).to.equal(5);
        });
    });

    function add(a,b){ return a+b; }
}());