

describe('this test' , function(){
    it('should correct if found regNoTown' , function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
assert.equal(fromWhere('CJ 343502'), 'Paarl');
assert.equal(fromWhere('CA 987504'), 'Cape Town');
        
    });



    it('should correct if found regNofromNoTown' , function(){
        
        assert.equal(fromWhere('ZN 568593'), 'Some other place!')

    });
});



