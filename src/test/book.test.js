import mocha from 'mocha'
import {assert,expect} from 'chai'
import request   from 'request'


describe('book testing',function(){
    let url = 'http://localhost:3004/book/most-books'
    it('getallbooks',function(done){
        request(url,function(err,res,body){
            expect(res.statusCode).to.equal(201)
        })
        done()
    })
})