const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true,
        unique: true
    },
    postAuthor: {
        type: String,
        required: true
    },
    postTitle: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    },
    postDate: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);