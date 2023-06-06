describe('this test' , function(){
    it('should correct if all true' , function(){
        assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true);
    });
it('should correct if all false' , function(){
    assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
});
});