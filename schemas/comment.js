const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentId: {
        type: Number,
        required: true,
        unique: true
    },
    postId: {
        type: Number,
        required: true,
    },
    commentAuthor: {
        type: String,
        required: true
    },
    commentBody: {
        type: String,
        required: true
    },
    commentDate: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Comment', commentSchema);