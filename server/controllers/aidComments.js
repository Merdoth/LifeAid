import {
    INTERNAL_SERVER_ERROR, CREATED, NOT_FOUND, getStatusText
} from 'http-status-codes';

const db = require('./promise').AidDb;

const averageRating = async aid => {
    const { comments } = aid;

    if (comments) {
        let commentTotal = 0;

        for (let i = 0; i < comments.length; i += 1) {
            commentTotal += comments[i].rating;
        }

        const ratingAverage = await parseInt(commentTotal / comments.length, 10);
        aid.rating = ratingAverage;
        aid.save();
    }
};

const Comments = {
    async create(req, res) {
        try {
            const aid = await db.findOne({ _id: req.params.aidId });

            if (!aid) {
                return res.status(NOT_FOUND).send({
                    message: getStatusText(NOT_FOUND),
                    status: 'error',
                });
            }

            const queryText = req.body;
            aid.comments.push(queryText);
            averageRating(aid);

            return res.status(CREATED).send({
                data: { aid, message: 'Comment successfully created' },
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

    async deleteComment(req, res) {
        const queryText = {
            _id: req.params.aidId,
        };

        try {
            const aid = await db.findOne(queryText);

            if (!aid) {
                return res.status(NOT_FOUND).send({
                    message: getStatusText(NOT_FOUND),
                    status: 'error',
                });
            }

            aid.comments.id({ _id: req.params.commentId }).remove();
            averageRating(aid);

            return res.status(CREATED).send({
                data: { aid, message: 'Comment successfully removed' },
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
            _id: req.params.aidId,
        };
        try {
            const aid = await db.findOne(queryText);

            if (!aid) {
                return res.status(NOT_FOUND).send({
                    message: getStatusText(NOT_FOUND),
                    status: 'error',
                });
            }

            const comment = await aid.comments.id(req.params.commentId);

            return res.status(CREATED).send({
                data: { comment },
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

    async updateComment(req, res) {
        const queryText = {
            _id: req.params.aidId,
        };

        try {
            const aid = await db.findOne(queryText);

            if (!aid) {
                return res.status(NOT_FOUND).send({
                    message: getStatusText(NOT_FOUND),
                    status: 'error',
                });
            }

            let comment = await aid.comments.id(req.params.commentId);
            const { author, rating, reviewText } = req.body;

            comment = {
                ...comment,
                author,
                rating,
                reviewText,
            };

            return res.status(CREATED).send({
                data: { comment, message: 'Comment successfully updated' },
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

module.exports = Comments;
