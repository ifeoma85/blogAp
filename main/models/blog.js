const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

//Define book schema
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    read_count: {
        type: Number,
        required: true
    },
    reading_time: {
        type: Date,
        required: true
    },
    tags: {
        type: Number,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Blog', BlogSchema)