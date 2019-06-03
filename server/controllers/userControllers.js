import {
    CREATED, getStatusText, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, BAD_REQUEST
} from 'http-status-codes';
import validateUserQueryText from '../validation/user';

const bcrypt = require('bcrypt');
const db = require('./promise').UserDb;

const Users = {
    async create(req, res) {
        const { errors, isValid } = validateUserQueryText(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(BAD_REQUEST).send({
                data: { errors },
                status: 'fail',
            });
        }

        const queryText = req.body;

        // Encrypts User Password and Updates queryText
        await bcrypt
            .hash(queryText.password, 10)
            .then(hash => {
                queryText.password = hash;
            })
            .catch(err => err.message);

        try {
            const user = await db.create(queryText);
            return res.status(CREATED).send({
                data: { message: 'User successfully created', user },
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

    async delete(req, res) {
        const queryText = {
            _id: req.params.id,
        };

        try {
            const user = await db.findOneAndDelete(queryText);
            if (!user) {
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
            const users = await db.find();
            return res.status(OK).send({
                data: { users },
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
            const user = await db.findOne(queryText);
            if (!user) {
                return res.status(NOT_FOUND).send({
                    message: getStatusText(NOT_FOUND),
                    status: 'error',
                });
            }
            return res.status(OK).send({
                data: { user },
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

    async update(req, res) {
        const queryText = {
            _id: req.params.id,
        };

        const { errors, isValid } = validateUserQueryText(req.body);

        // Check Validation
        if (!isValid) {
            return res.status(BAD_REQUEST).send({
                data: { errors },
                status: 'fail',
            });
        }

        const updateData = req.body;

        try {
            const user = await db.findOneAndUpdate(queryText, updateData);
            if (!user) {
                return res.status(NOT_FOUND).send({
                    message: getStatusText(NOT_FOUND),
                    status: 'error',
                });
            }
            return res.status(OK).send({
                data: { message: 'User successfully updated', user },
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

module.exports = Users;
