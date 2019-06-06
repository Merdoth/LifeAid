/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/first */
process.env.NODE_ENV = 'test';
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../server/app';
import Aid from '../server/models/aid';

describe('aids', () => {
    describe('GET /aids', () => {
        it('it should GET all the Aids', async () => {
            request(app)
                .get('/api/v1/aids')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    });
});
