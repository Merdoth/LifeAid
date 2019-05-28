/* eslint-disable import/first */
/* eslint-disable sort-keys */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';
import Aid from '../server/models/aid';
import Report from '../server/models/report';

const { expect } = chai;

chai.use(chaiHttp);
// Our parent block
describe('aids', () => {
    /* beforeEach(done => { // Before each test we empty the database
        aid.remove({}, err => {
            done();
        });
    }); */
    /*
  * Test the /GET route
  */
    describe('/GET aids', () => {
        it('it should GET all the Aids', done => {
            chai.request(app)
                .get('/api/v1/aids')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
    });

    /* describe('/POST aid', () => {
        it('it should not POST an aid without intro field', done => {
            let aid = {
                title: 'Suffocation',
                intro: 'Asphyxia is a condition where the oxygen level reduces in the blood with an increase in the carbon dioxide concentration resulting in death or unconsciousness',
                video: 'https://youtu.be/Dfod4noPe8E',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dui tortor, vitae sagittis turpis semper non. Nulla et justo tempor, semper ante non, porttitor diam. Aenean sit amet blandit orci. Aliquam feugiat arcu nec egestas lacinia. Vivamus ut felis at purus placerat tincidunt in at purus. Aliquam dignissim pharetra metus, condimentum varius arcu pellentesque finibus. Nullam mollis finibus enim non dictum. Nunc id felis at turpis mollis gravida quis quis quam. Pellentesque dignissim, nunc eu tempus posuere, ligula eros auctor dolor, in auctor tortor risus id lorem. Quisque eu neque sed massa tempor finibus. Sed a aliquam lorem, sit amet rhoncus justo. Praesent dictum ut nisi et pulvinar. Vestibulum pharetra pulvinar venenatis. Phasellus congue neque eget nisi blandit varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  Phasellus quis leo nisi. Aliquam congue nibh id ultricies congue. Donec luctus a sapien id fermentum. Nullam sit amet hendrerit arcu. Fusce neque eros, gravida non arcu id, malesuada hendrerit mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec viverra tellus et dignissim blandit. Duis euismod lacus bibendum eleifend consequat. Nullam non turpis non velit auctor pharetra. Duis cursus mauris eget nulla porta scelerisque. Integer tincidunt, risus non vulputate viverra, mi nunc viverra metus, vitae tristique sapien metus facilisis tortor. Nam dui ipsum, scelerisque at molestie quis, cursus sit amet nibh.',
                imageId: 'audio/i8nuguxuuie6lqjzzj19',
                imageUrl: 'http://res.cloudinary.com/dwozj7hoc/video/upload/v1558193139/audio/i8nuguxuuie6lqjzzj19.mp4',
            };
            chai.request(app)
                .post('/api/v1/aid')
                .send(aid)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
    }); */

    describe('GET /aids/:id', () => {
        it('should GET an aid by the given id', async () => {
            let aid = await new Aid(
                {
                    title: 'Suffocation',
                    intro: 'Asphyxia is a condition where the oxygen level reduces in the blood with an increase in the carbon dioxide concentration resulting in death or unconsciousness',
                    video: 'https://youtu.be/Dfod4noPe8E',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dui tortor, vitae sagittis turpis semper non.',
                    imageId: 'audio/i8nuguxuuie6lqjzzj19',
                    imageUrl: 'http://res.cloudinary.com/dwozj7hoc/video/upload/v1558193139/audio/i8nuguxuuie6lqjzzj19.mp4',
                }
            );
            aid.save((err, aid) => {
                chai.request(app)
                    .get(`/api/v1/aids/${aid.id}`)
                    .send(aid)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        done();
                    });
            });
        });
    });

    describe('/PUT/:id aid', () => {
        it('it should UPDATE a aid given the id', done => {
            let aid = new Aid(
                {
                    title: 'Suffocation',
                    intro: 'Asphyxia is a condition where the oxygen level reduces in the blood with an increase in the carbon dioxide concentration resulting in death or unconsciousness',
                    video: 'https://youtu.be/Dfod4noPe8E',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dui tortor, vitae sagittis turpis semper non.',
                    imageId: 'audio/i8nuguxuuie6lqjzzj19',
                    imageUrl: 'http://res.cloudinary.com/dwozj7hoc/video/upload/v1558193139/audio/i8nuguxuuie6lqjzzj19.mp4',
                }
            );
            aid.save((err, aid) => {
                chai.request(app)
                    .put(`/api/v1/aids/${aid.id}`)
                    .send(
                        {
                            title: 'Suffocation',
                            intro: 'Asphyxia is a condition where the oxygen level reduces in the blood with an increase in the carbon dioxide concentration resulting in death or unconsciousness',
                            video: 'https://youtu.be/Dfod4noPe8E',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dui tortor, vitae sagittis turpis semper non.',
                            imageId: 'audio/i8nuguxuuie6lqjzzj19',
                            imageUrl: 'http://res.cloudinary.com/dwozj7hoc/video/upload/v1558193139/audio/i8nuguxuuie6lqjzzj19.mp4',
                        }
                    )
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        expect(res.body.data.message).to.be.eql('Aid successfully updated');
                        done();
                    });
            });
        });
    });

    describe('/DELETE/:id aid', () => {
        it('it should DELETE a aid given the id', done => {
            let aid = new Aid(
                {
                    title: 'Suffocation',
                    intro: 'Asphyxia is a condition where the oxygen level reduces in the blood with an increase in the carbon dioxide concentration resulting in death or unconsciousness',
                    video: 'https://youtu.be/Dfod4noPe8E',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dui tortor, vitae sagittis turpis semper non.',
                    imageId: 'audio/i8nuguxuuie6lqjzzj19',
                    imageUrl: 'http://res.cloudinary.com/dwozj7hoc/video/upload/v1558193139/audio/i8nuguxuuie6lqjzzj19.mp4',
                }
            );
            aid.save((err, aid) => {
                chai.request(app)
                    .delete(`/api/v1/aids/${aid.id}`)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        expect(res.body.status).to.be.eql('success');
                        done();
                    });
            });
        });
    });
});

describe('reports', () => {
    /* beforeEach(done => { // Before each test we empty the database
        aid.remove({}, err => {
            done();
        });
    }); */
    /*
  * Test the /GET route
  */
    describe('/GET reports', () => {
        it('it should GET all the Reports', done => {
            chai.request(app)
                .get('/api/v1/reports')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.data).to.be.an('object');
                    expect(res.body.status).to.be.eql('success');
                    done();
                });
        });
    });

    /* describe('/POST aid', () => {
        it('it should not POST an aid without intro field', done => {
            let aid = {
                title: 'Suffocation',
                intro: 'Asphyxia is a condition where the oxygen level reduces in the blood with an increase in the carbon dioxide concentration resulting in death or unconsciousness',
                video: 'https://youtu.be/Dfod4noPe8E',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas dui tortor, vitae sagittis turpis semper non. Nulla et justo tempor, semper ante non, porttitor diam. Aenean sit amet blandit orci. Aliquam feugiat arcu nec egestas lacinia. Vivamus ut felis at purus placerat tincidunt in at purus. Aliquam dignissim pharetra metus, condimentum varius arcu pellentesque finibus. Nullam mollis finibus enim non dictum. Nunc id felis at turpis mollis gravida quis quis quam. Pellentesque dignissim, nunc eu tempus posuere, ligula eros auctor dolor, in auctor tortor risus id lorem. Quisque eu neque sed massa tempor finibus. Sed a aliquam lorem, sit amet rhoncus justo. Praesent dictum ut nisi et pulvinar. Vestibulum pharetra pulvinar venenatis. Phasellus congue neque eget nisi blandit varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  Phasellus quis leo nisi. Aliquam congue nibh id ultricies congue. Donec luctus a sapien id fermentum. Nullam sit amet hendrerit arcu. Fusce neque eros, gravida non arcu id, malesuada hendrerit mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec viverra tellus et dignissim blandit. Duis euismod lacus bibendum eleifend consequat. Nullam non turpis non velit auctor pharetra. Duis cursus mauris eget nulla porta scelerisque. Integer tincidunt, risus non vulputate viverra, mi nunc viverra metus, vitae tristique sapien metus facilisis tortor. Nam dui ipsum, scelerisque at molestie quis, cursus sit amet nibh.',
                imageId: 'audio/i8nuguxuuie6lqjzzj19',
                imageUrl: 'http://res.cloudinary.com/dwozj7hoc/video/upload/v1558193139/audio/i8nuguxuuie6lqjzzj19.mp4',
            };
            chai.request(app)
                .post('/api/v1/aid')
                .send(aid)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    done();
                });
        });
    }); */

    describe('/GET/:id report', () => {
        it('it should GET a report by the given id', done => {
            let report = new Report(
                {
                    name: 'Faith Omojola',
                    number: '08150422039',
                    audio: 'audio link',
                    coords: [6.24, 4.9876],
                    image: 'image link',
                    audioId: 'audio/nqt85pgqjpdsava4ng6l',
                    audioUrl: 'http://res.cloudinary.com/dwozj7hoc/video/upload/v1558201327/audio/nqt85pgqjpdsava4ng6l.mp3',
                }
            );
            report.save((err, report) => {
                chai.request(app)
                    .get(`/api/v1/reports/${report.id}`)
                    .send(report)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        done();
                    });
            });
        });
    });

    describe('/DELETE/:id report', () => {
        it('it should DELETE a report given the id', done => {
            let report = new Report(
                {
                    name: 'Faith Omojola',
                    number: '08150422039',
                    audio: 'audio link',
                    coords: [6.24, 4.9876],
                    image: 'image link',
                    audioId: 'audio/nqt85pgqjpdsava4ng6l',
                    audioUrl: 'http://res.cloudinary.com/dwozj7hoc/video/upload/v1558201327/audio/nqt85pgqjpdsava4ng6l.mp3',
                }
            );
            report.save((err, report) => {
                chai.request(app)
                    .delete(`/api/v1/reports/${report.id}`)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object');
                        expect(res.body.status).to.be.eql('success');
                        done();
                    });
            });
        });
    });
});
