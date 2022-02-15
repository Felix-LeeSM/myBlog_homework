const express = require('express');
const Comments = require('../schemas/comment.js');
const Posts = require('../schemas/post.js');
const router = express.Router();

router.get('/:postId', async (req, res) => {
    const { postId } = req.params;
    const order = req.query;
    const comments = await Comments.find({ postId: Number(postId) });

    if (order === '1') {
        comments.sort((prev, present) => {
            return prev.commentDate - present.commentDate;
        })
    }
    if (!res.length) {
        return res.status(400).json({
            success: false,
            errorMessage: '아직 작성된 댓글이 없습니다.'
        });
    }
    res.send(comments);
});

router.post('/write/:postId', async (req, res) => {
    const { postId } = req.params;
    const { commentAuthor, commentBody } = req.body;

    if (!commentBody) {
        return res.status(400).json({
            success: false,
            errorMessage: '댓글 내용을 입력해주세요'
        })
    }

    const post = await Posts.find({ postId: Number(postId) });
    if (!post.length) {
        return res.status(400).json({
            success: false,
            errorMessage: '해당 게시글이 없습니다.'
        })
    }

    const comments = await Comments.find();
    const commentId = comments[comments.length - 1].commentId + 1;
    const today = new Date();
    const month = today.getMonth() > 9 ? `${today.getMonth() + 1}` : `0${today.getMonth() + 1}`;
    const day = today.getDate() > 9 ? `${today.getDate()}` : `0${today.getDate()}`;
    const commentDate = Number(`${today.getFullYear()}${month}${day}`);

    await Comments.create({
        commentId,
        postId,
        commentAuthor,
        commentBody,
        commentDate,
    });

    res.json({ success: true });
});

router.put('/write/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const { commentBody } = req.body;

    const comment = await Comments.find({ commentId: Number(commentId) });
    if (!comment.length) {
        return res.status(400).json({
            success: false,
            errorMessage: '해당 댓글은 존재하지 않습니다.'
        });
    }

    if (!commentBody) {
        return res.status(400).json({
            success: false,
            errorMessage: '댓글 내용을 입력해주세요'
        });
    }

    await Comments.updateOne({ commentId: Number(commentId) }, {
        $set: {
            commentBody
        }
    });
    res.json({ success: true });
});

router.delete('/delete/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const comment = await Comments.find({ commentId: Number(commentId) });

    if (!comment.length) {
        return res.status(400).json({
            success: false,
            errorMessage: '해당 댓글은 존재하지 않습니다.'
        });
    }

    await Comments.deleteOne({ commentId: Number(commentId) });
    res.json({ success: true });
})

module.exports = router;
