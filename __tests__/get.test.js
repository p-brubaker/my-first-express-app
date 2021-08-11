const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the scientists endpoint', async () => {
    const response = await request.get('/scientists');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
})

it('gets a specific scientist', async () => {
    const response = await request.get('/scientists/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
})

