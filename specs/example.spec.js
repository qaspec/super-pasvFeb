import { expect } from 'chai';
//or const expect = require('chai').expect;
//import { expect } from 'chai'; all from chai
describe('Math functions', function (){
    const a = 4
    const b = 5
    const c = 9
    const d = -1;
    it.skip('A + B = C', function(){
        expect(a + b).to.eq(c)
    })
    //if want to execute only specific test type only
    //skip not to run test
    it.only('A - B = D', function() {
        expect(a - b).to.eq(d);
    })
})