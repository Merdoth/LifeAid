import mongoose from 'mongoose';
// const mongoosePaginate = require('mongoose-paginate');
const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
    author: {
        required: true,
        type: String,
    },
    createdOn: {
        default: Date.now,
        type: Date,
    },
    rating: {
        max: 5,
        min: 0,
        required: true,
        type: Number,
    },
    reviewText: {
        required: true,
        type: String,
    },
});

const aidSchema = new Schema(
    {
        comments: [commentSchema],
        description: {
            required: true,
            type: String,
        },
        imageId: {
            required: true,
            type: String,
        },
        imageUrl: {
            required: true,
            type: String,
        },
        intro: {
            required: true,
            type: String,
        },
        rating: {
            max: 5,
            min: 0,
            required: true,
            type: Number,
        },
        title: {
            required: true,
            type: String,
        },
        video: {
            required: true,
            type: String,
        },
    }
);

module.exports = mongoose.model('Aid', aidSchema);
