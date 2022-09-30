import { cookie } from 'express-validator';
import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
  const authCookie = await global.signin();

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', authCookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authentticated', async () => {
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect(response.body.currentUser).toBeNull();
});
