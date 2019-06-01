/* eslint-disable sort-keys */
import assert from 'assert';
import fetch from 'node-fetch';
import nock from 'nock';

process.env.NODE_ENV = 'test';

const TEST_URL = 'http://localhost:8080';
const scope = nock(TEST_URL);

describe('GET /aids', () => {
    it('it should GET a list of all the "Aids"', async () => {
        /**
            these should be fake aids, create them yourself and make them resemble
            what this endpoints actually returns
        */
        const testAidList = [
            {
                title: 'Suffocation',
                intro: 'Asphyxia is a condition where the oxygen level',
                video: 'https://youtu.be/Dfod4noPe8E',
                description: 'Lorem ipsum dolor sit amet,',
                imageId: 'audio/i8nuguxuuie6lqjzzj19',
                imageUr: 'http://res.cloudinary.com',
                __v: 0,
            },
            {
                title: 'Suffocation',
                intro: 'Asphyxia is a condition where the oxygen level',
                video: 'https://youtu.be/Dfod4noPe8E',
                description: 'Lorem ipsum dolor sit amet,',
                imageId: 'audio/i8nuguxuuie6lqjzzj19',
                imageUr: 'http://res.cloudinary.com',
                __v: 0,
            },
        ];

        scope
            .get('/api/v1/aids')
            .reply(200, testAidList);

        const response = await fetch(`${TEST_URL}/api/v1/aids`);
        const data = await response.json();

        assert.deepStrictEqual(data, testAidList);
    });
});

