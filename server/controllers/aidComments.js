/* eslint-disable camelcase */
/* eslint-disable sort-keys */
import {
    INTERNAL_SERVER_ERROR, CREATED, NOT_FOUND, getStatusText
} from 'http-status-codes';

const db = require('./promise').AidDb;

const averageRating = async aid => {
    if (aid.comments && aid.comments.length > 0) {
        const commentCount = await aid.comments.length;
        let commentTotal = 0;
        for (let i = 0; i < commentCount; i += 1) {
            commentTotal += aid.comments[i].rating;
        }

        const ratingAverage = await parseInt(commentTotal / commentCount, 10);
        aid.rating = ratingAverage;
        aid.save();
    }
};

const Comments = {
    async create(req, res) {
        try {
            const query = {
                _id: req.params.aidId,
            };

            const aid = await db.findOne(query);

            if (!aid) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }

            const queryText = req.body;
            aid.comments.push(queryText);
            averageRating(aid);

            return res.status(CREATED).send({
                status: 'success',
                data: { aid, message: 'Comment successfully created' },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async deleteComment(req, res) {
        const queryText = {
            _id: req.params.aidId,
        };

        try {
            const aid = await db.findOne(queryText);

            if (!aid) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }

            aid.comments.id({ _id: req.params.commentId }).remove();
            averageRating(aid);

            return res.status(CREATED).send({
                status: 'success',
                data: { aid, message: 'Comment successfully removed' },
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
            _id: req.params.aidId,
        };
        try {
            const aid = await db.findOne(queryText);

            if (!aid) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }

            const comment = await aid.comments.id(req.params.commentId);

            return res.status(CREATED).send({
                status: 'success',
                data: { comment },
            });
        } catch (error) {
            return res.status(INTERNAL_SERVER_ERROR).send({
                status: 'error',
                message: getStatusText(INTERNAL_SERVER_ERROR),
                error,
            });
        }
    },

    async updateComment(req, res) {
        const queryText = {
            _id: req.params.aidId,
        };

        try {
            const aid = await db.findOne(queryText);

            if (!aid) {
                return res.status(NOT_FOUND).send({
                    status: 'error',
                    message: getStatusText(NOT_FOUND),
                });
            }

            const comment = await aid.comments.id(req.params.commentId);
            const { author, rating, reviewText } = req.body;
            comment.author = author;
            comment.rating = rating;
            comment.reviewText = reviewText;
            averageRating(aid);

            return res.status(CREATED).send({
                status: 'success',
                data: { comment, message: 'Comment successfully updated' },
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

module.exports = Comments;
