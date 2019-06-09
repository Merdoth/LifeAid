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
            const updateData = {
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
                .reply(200, { ...testAid, ...updateData });

            const response = await fetch(`${TEST_URL}/api/v1/aids/1`, {
                body: updateData,
                method: 'PUT',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, { ...testAid, ...updateData });
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
    describe('/DELETE/:id aid', () => {
        it('it should DELETE an aid given the id', async () => {
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
                .delete('/api/v1/aids/1')
                .reply(200, []);

            const response = await fetch(`${TEST_URL}/api/v1/aids/1`, {
                body: testAid,
                method: 'DELETE',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, []);
        });
    });
});

describe('reports', () => {
    describe('GET /reports', () => {
        it('it should GET a list of all the "Reports"', async () => {
            const testReportList = [
                {
                    _id: '1',
                    audioId: 'audio/swlxfpt1trwiaaybbune',
                    audioUrl: 'audio url link',
                    coords: [
                        6.24,
                        4.9876,
                    ],
                    name: 'Faith Omojola',
                    number: 8150422039,
                },
                {
                    _id: '2',
                    audioId: 'audio/swlxfpt1trwiaaybbune',
                    audioUrl: 'audio url link',
                    coords: [
                        6.24,
                        4.9876,
                    ],
                    name: 'Faith Omojola',
                    number: 8150422039,
                },
            ];

            scope
                .get('/api/v1/reports')
                .reply(200, testReportList);

            const response = await fetch(`${TEST_URL}/api/v1/reports`);
            const data = await response.json();

            assert.deepStrictEqual(data, testReportList);
        });
    });
    describe('GET /reports/:id', () => {
        it('should GET a report by the given id', async () => {
            const testReport = {
                audioId: 'audio/swlxfpt1trwiaaybbune',
                audioUrl: 'audio url link',
                coords: [
                    6.24,
                    4.9876,
                ],
                name: 'Faith Omojola',
                number: 8150422039,
            };
            scope
                .get('/api/v1/reports/1')
                .reply(200, testReport);

            const response = await fetch(`${TEST_URL}/api/v1/reports/1`);
            const data = await response.json();

            assert.deepStrictEqual(data, testReport);
        });
    });
    describe('/POST report', () => {
        it('it should CREATE a report', async () => {
            const testReport = {
                _id: '1',
                audioId: 'audio/swlxfpt1trwiaaybbune',
                audioUrl: 'audio url link',
                coords: [
                    6.24,
                    4.9876,
                ],
                name: 'Faith Omojola',
                number: 8150422039,
            };
            scope
                .post('/api/v1/report')
                .reply(200, testReport);

            const response = await fetch(`${TEST_URL}/api/v1/report`, {
                body: testReport,
                method: 'POST',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, testReport);
        });
    });
    describe('/DELETE/:id report', () => {
        it('it should DELETE a report given the id', async () => {
            const testReport = {
                _id: '1',
                audioId: 'audio/swlxfpt1trwiaaybbune',
                audioUrl: 'audio url link',
                coords: [
                    6.24,
                    4.9876,
                ],
                name: 'Faith Omojola',
                number: 8150422039,
            };
            scope
                .delete('/api/v1/reports/1')
                .reply(200, []);

            const response = await fetch(`${TEST_URL}/api/v1/reports/1`, {
                body: testReport,
                method: 'DELETE',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, []);
        });
    });
});

describe('comments', () => {
    describe('GET /aids/aidId/comments/commentId', () => {
        it('should GET a comment by the given id', async () => {
            const testComment = {
                _id: '1',
                author: 'Faith Omojola',
                createdOn: '2019-06-05T08:21:55.427Z',
                rating: 1,
                reviewText: 'itis very insightful',
            };
            scope
                .get('/api/v1/aids/1/comments/1')
                .reply(200, testComment);

            const response = await fetch(`${TEST_URL}/api/v1/aids/1/comments/1`);
            const data = await response.json();

            assert.deepStrictEqual(data, testComment);
        });
    });
    describe('PUT /aids/aidId/comments/commentId', () => {
        it('it should UPDATE a comment given the id', async () => {
            const updateData = {
                author: 'updated author',
            };
            const testComment = {
                _id: '1',
                author: 'Faith Omojola',
                createdOn: '2019-06-05T08:21:55.427Z',
                rating: 1,
                reviewText: 'itis very insightful',
            };
            scope
                .put('/api/v1/aids/1/comments/1')
                .reply(200, { ...testComment, ...updateData });

            const response = await fetch(`${TEST_URL}/api/v1/aids/1/comments/1`, {
                body: updateData,
                method: 'PUT',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, { ...testComment, ...updateData });
        });
    });
    describe('/POST comment', () => {
        it('it should CREATE a report', async () => {
            const testComment = {
                author: 'Faith Omojola',
                createdOn: '2019-06-05T08:21:55.427Z',
                rating: 1,
                reviewText: 'itis very insightful',
            };
            scope
                .post('/api/v1/aids/1/comments')
                .reply(200, testComment);

            const response = await fetch(`${TEST_URL}/api/v1/aids/1/comments`, {
                body: testComment,
                method: 'POST',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, testComment);
        });
    });
    describe('DELETE /aids/aidId/comments/commentId comment', () => {
        it('it should DELETE a comment given the id', async () => {
            const testComment = {
                author: 'Faith Omojola',
                createdOn: '2019-06-05T08:21:55.427Z',
                rating: 1,
                reviewText: 'itis very insightful',
            };
            scope
                .delete('/api/v1/aids/1/comments/1')
                .reply(200, []);

            const response = await fetch(`${TEST_URL}/api/v1/aids/1/comments/1`, {
                body: testComment,
                method: 'DELETE',
            });
            const data = await response.json();
            assert.deepStrictEqual(data, []);
        });
    });
});
