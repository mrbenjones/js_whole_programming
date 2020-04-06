const redis = require('app/util/redis')


afterAll(function(){
    redis.closeClient()
    }
)
describe('redis stub in place.', function(){
    test('redis connect starts', function(done) {
        redis.set('a','avalue')
        return redis.get('a').then(
            value => {
                expect(value).toEqual('avalue')
                done()
            }
        )
    })
})
