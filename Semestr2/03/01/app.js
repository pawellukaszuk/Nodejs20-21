const express = require('express');
const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(req.method, req.url, req.query);
    next();
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('hello!');
});

app.listen(4700, () => console.log('server started'));