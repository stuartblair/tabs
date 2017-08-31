(function() {
    'use strict';
    const describe = require('mocha').describe;
    const it = require('mocha').it;
    const expect = require('chai').expect;

    describe('add', () => {
        it('sums its operands', () => {
            expect(add(2, 3)).to.equal(5);
        });
    });

    function add(a,b){ return a+b; }
}());