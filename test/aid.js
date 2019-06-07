import assert from 'assert';
import fetch from 'node-fetch';
import nock from 'nock';

process.env.NODE_ENV = 'test';

const TEST_URL = 'http://localhost:8080';
const scope = nock(TEST_URL);

describe('aids', () => {
    describe('GET /aids', () => {
        it('it should GET a list of all the "Aids"', async () => {
            /**
                these should be fake aids, create them yourself and make them resemble
                what this endpoints actually returns
            */
            const testAidList = [
                {
                    _id: 1,
                    description: 'Lorem ipsum dolor sit amet,',
                    imageId: 'audio/i8nuguxuuie6lqjzzj19',
                    imageUrl: 'http://res.cloudinary.com',
                    intro: 'Asphyxia is a condition where the oxygen level',
                    title: 'Suffocation',
                    video: 'https://youtu.be/Dfod4noPe8E',
                },
                {
                    _id: 2,
                    description: 'Lorem ipsum dolor sit amet,',
                    imageId: 'audio/i8nuguxuuie6lqjzzj19',
                    imageUrl: 'http://res.cloudinary.com',
                    intro: 'Asphyxia is a condition where the oxygen level',
                    title: 'Suffocation',
                    video: 'https://youtu.be/Dfod4noPe8E',
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
    describe('GET /aids/:id', () => {
        it('should GET an aid by the given id', async () => {
            const testAid = {
                _id: 1,
                description: 'Lorem ipsum dolor sit amet,',
                imageId: 'audio/i8nuguxuuie6lqjzzj19',
                imageUrl: 'http://res.cloudinary.com',
                intro: 'Asphyxia is a condition where the oxygen level',
                title: 'Suffocation',
                video: 'https://youtu.be/Dfod4noPe8E',
            };
            scope
                .get('/api/v1/aids/1')
                .reply(200, testAid);

            const response = await fetch(`${TEST_URL}/api/v1/aids/1`);
            const data = await response.json();

            assert.deepStrictEqual(data, testAid);
        });
    });
    describe('/PUT/:id aid', () => {
        it('it should UPDATE an aid given the id', async () => {
            const updataeData = {
                intro: 'intro udpdate',
                title: 'Title Update',
            };
            const testAid = {
                _id: 1,
                description: 'Lorem ipsum dolor sit amet,',
                imageId: 'audio/i8nuguxuuie6lqjzzj19',
                imageUrl: 'http://res.cloudinary.com',
                intro: 'Asphyxia is a condition where the oxygen level',
                title: 'Suffocation',
                video: 'https://youtu.be/Dfod4noPe8E',
            };
            scope
                .put('/api/v1/aids/1')
                .reply(200, { ...testAid, ...updataeData });

            const response = await fetch(`${TEST_URL}/api/v1/aids/1`, {
                body: updataeData,
                method: 'PUT',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, { ...testAid, ...updataeData });
        });
    });
    describe('/POST aid', () => {
        it('it should CREATE an aid', async () => {
            const testAid = {
                description: 'Lorem ipsum dolor sit amet,',
                imageId: 'audio/i8nuguxuuie6lqjzzj19',
                imageUrl: 'http://res.cloudinary.com',
                intro: 'Asphyxia is a condition where the oxygen level',
                title: 'Suffocation',
                video: 'https://youtu.be/Dfod4noPe8E',
            };
            scope
                .post('/api/v1/aids')
                .reply(200, testAid);

            const response = await fetch(`${TEST_URL}/api/v1/aids`, {
                body: testAid,
                method: 'POST',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, testAid);
        });
    });
});
