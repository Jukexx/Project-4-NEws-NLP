
import 'regenerator-runtime/runtime'
const app = require('./index.js')
const supertest = require('supertest')

const request = supertest(app)


it('tests the guest greeting', async done =>{
    const response = await request.get('/getwelcomings').query({name : 'Andre'})
    
    expect(response.body.message).toMatch('Welcome aboard Andre(Visitor)')
    done()


})

it('tests the captain greeting', async done =>{
    const response = await request.get('/getwelcomings').query({name : 'Picard'})
    
    expect(response.body.message).toMatch('Hello Captain!')
    done()


})
