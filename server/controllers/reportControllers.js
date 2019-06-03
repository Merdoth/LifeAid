/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable sort-keys */
import {
    CREATED, getStatusText, INTERNAL_SERVER_ERROR, NOT_FOUND, OK
} from 'http-status-codes';
import dotenv from 'dotenv';
import sendMail from '../middlewares/nodemailer';

dotenv.config();

const {
    MAP_API_KEY,
} = process.env;

const db = require('./promise').ReportDb;

const Reports = {
    async create(req, res) {
        const { public_id: audioId, url: audioUrl } = await req.file;
        const queryText = { ...req.body, audioId, audioUrl };

        try {
            const report = await db.create(queryText);
            sendMail('lifeaidd@gmail.com',
                'Emergency report',
                'faithomojola@yahoo.com',
                `<b>Emergency </b> <br></br><br></br>
                <img src="https://maps.googleapis.com/maps/api/staticmap?
                center=${queryText.coords[0]},${queryText.coords[1]}
                &zoom=20&size=500x500
                &markers=color:red%7Clabel:S%7C${queryText.coords[0]},${queryText.coords[1]}
                &key=${MAP_API_KEY}"> <br></br><br></br> 
                ${queryText.audioUrl}`);

            return res.status(CREATED).send({
                status: 'success',
                data: { message: 'Report successfully created', report },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
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
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }
            return res.status(OK).send({
                status: 'success',
                data: null,
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async getAll(req, res) {
        try {
            const reports = await db.find();
            return res.status(OK).send({
                status: 'success',
                data: { reports },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
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
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }
            return res.status(OK).send({
                status: 'success',
                data: { report },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },
};

module.exports = Reports;
