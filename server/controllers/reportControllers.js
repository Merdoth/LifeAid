import {
    CREATED, getStatusText, INTERNAL_SERVER_ERROR, NOT_FOUND, OK
} from 'http-status-codes';
import dotenv from 'dotenv';
import sendMail from '../middlewares/nodemailer';
import { receiver, sender, title } from '../middlewares/constant';

dotenv.config();

const {
    MAP_API_KEY,
} = process.env;

const db = require('./promise').ReportDb;

const messageBody = (coords, link) => {
    const [lat, lng] = coords;
    return `<b>Emergency </b> <br></br><br></br>
    <img src="https://maps.googleapis.com/maps/api/staticmap?
    center=${lat},${lng}
    &zoom=20&size=500x500
    &markers=color:red%7Clabel:S%7C${lat},${lng}
    &key=${MAP_API_KEY}"> <br></br><br></br> 
    ${link}`;
};

const Reports = {
    async create(req, res) {
        const { public_id: audioId, url: audioUrl } = await req.file;
        const queryText = { ...req.body, audioId, audioUrl };
        const { coords } = queryText;

        try {
            const report = await db.create(queryText);
            sendMail(sender,
                title,
                receiver,
                messageBody(coords, audioUrl));

            return res.status(CREATED).send({
                data: { message: 'Report successfully created', report },
                status: 'success',
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                error,
                message: getStatusText(INTERNAL_SERVER_ERROR),
                status: 'error',
            });
        }
    },

    async deleteReport(req, res) {
        const queryText = {
            _id: req.params.id,
        };
        try {
            const report = await db.findOneAndDelete(queryText);
            if (!report) {
                return res.status(NOT_FOUND).send({
                    message: getStatusText(NOT_FOUND),
                    status: 'error',
                });
            }
            return res.status(OK).send({
                data: null,
                status: 'success',
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                error,
                message: getStatusText(INTERNAL_SERVER_ERROR),
                status: 'error',
            });
        }
    },

    async getAll(req, res) {
        try {
            const reports = await db.find();
            return res.status(OK).send({
                data: { reports },
                status: 'success',
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                error,
                message: getStatusText(INTERNAL_SERVER_ERROR),
                status: 'error',
            });
        }
    },

    async getOne(req, res) {
        const queryText = {
            _id: req.params.id,
        };
        try {
            const report = await db.findOne(queryText);
            if (!report) {
                return res.status(NOT_FOUND).send({
                    message: getStatusText(NOT_FOUND),
                    status: 'error',
                });
            }
            return res.status(OK).send({
                data: { report },
                status: 'success',
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                error,
                message: getStatusText(INTERNAL_SERVER_ERROR),
                status: 'error',
            });
        }
    },
};

module.exports = Reports;
