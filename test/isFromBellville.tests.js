//console.log(isFromBellville('CY 123'));
//console.log(isFromBellville('CJ 123'));

it('isFromBellville', function(){
    assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);
   
});

