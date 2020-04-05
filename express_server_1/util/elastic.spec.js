const elastic = require('app/util/elastic')


describe('Elastic stub in place.', function(){
    test('Elsaticsearch connect starts', function(done) {
        expect(elastic.stub()).toEqual(true)
        done()
    })
})
