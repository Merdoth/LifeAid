/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable sort-keys */
import {
    CREATED, getStatusText, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, BAD_REQUEST
} from 'http-status-codes';
import validateUserQueryText from '../validation/user';

const db = require('./promise').UserDb;

const Users = {
    async create(req, res) {
        const { errors, isValid } = validateUserQueryText(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(BAD_REQUEST).send({
                status: 'fail',
                data: { errors },
            });
        }

        const queryText = req.body;

        try {
            const user = await db.create(queryText);
            return res.status(CREATED).send({
                status: 'success',
                data: { message: 'User successfully created', user },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async update(req, res) {
        const queryText = {
            _id: req.params.id,
        };

        const { errors, isValid } = validateUserQueryText(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(BAD_REQUEST).send({
                status: 'fail',
                data: { errors },
            });
        }

        const updateData = req.body;

        try {
            const user = await db.findOneAndUpdate(queryText, updateData);
            if (!user) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }
            return res.status(OK).send({
                status: 'success',
                data: { aid, message: 'User successfully updated' },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async delete(req, res) {
        const queryText = {
            _id: req.params.id,
        };

        try {
            const user = await db.findOneAndDelete(queryText);
            if (!user) {
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
            const users = await db.find();
            return res.status(OK).send({
                status: 'success',
                data: { users },
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
            const user = await db.findOne(queryText);
            if (!user) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }
            return res.status(OK).send({
                status: 'success',
                data: { user },
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

module.exports = Users;
