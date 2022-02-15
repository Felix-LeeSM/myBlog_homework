const express = require('express');
const connect = require('./schemas/index.js');
const res = require('express/lib/response');
const cors = require('cors');
const app = express();
const port = 3000;

connect();

const logger = (req, res, next) => {
    console.log('Request URL :', req.originalUrl, '-', new Date());
    next();
};

const postRouter = require('./routes/posts.js');
const commentRouter = require('./routes/comments.js');

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/post', [postRouter]);
app.use('/comment', [commentRouter]);


app.get('/', (req, res) => {
    res.redirect('http://seungmin.shop/post');
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 켜졌어요!');
});
