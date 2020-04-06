const db = require('app/util/db')


afterAll(() =>
{
    db.destroyPool()
})
describe('database connection happens', function(){
    test('connect and trivial request', function(done) {
        return db.queryPromise("SELECT 1 AS num ").then(
            (rows,err) => {
                console.log(rows)
                expect(rows[0]['num']).toEqual(1)
                done()
            }
        )

    })
})
