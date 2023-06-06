describe('this test' , function(){
    it('should correct if suggested fee' , function(){
        assert.equal(transportFee('morning'), 'R20');

assert.equal(transportFee('afternoon'), 'R10');});
    




    it('should correct if suggested none' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free'); 
    });

});

