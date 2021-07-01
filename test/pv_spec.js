const { verifypass } = require('../pv')
const { assert } = require('chai')

describe('Password_verifier', ()=>{

    it('Password Should not be null',()=>{

        assert.throws(()=>{verifypass(null)}, 'password should not be null');

    })

    it('Password Should not be less than 8 char',()=>{

        assert.throws(()=>{verifypass("62jdad6")}, 'length should not be less than 8');

    })

    it('Password Should have atleast one UpperCase character',()=>{

        assert.throws(()=>{verifypass("bfhdbdbnm")}, 'atleast 1 upper case car should be present');

    })

    it('Password Should have atleast one LowerCase character',()=>{

        assert.throws(()=>{verifypass("HJVGFHJVFJB")}, 'atleast 1 lower case ');

    })

    it('Password Should have atleast one Number',()=>{

        assert.throws(()=>{verifypass("NMDBBDbfnmdbm")}, 'No digit Error');

    })



})
