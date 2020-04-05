const redis = require('app/util/redis')


describe('redis stub in place.', function(){
    test('redis connect starts', function(done) {
        expect(redis.stub()).toEqual(true)
        done()
    })
})
