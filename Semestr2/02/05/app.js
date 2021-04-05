const express = require('express');

const app = express();

const users = [{
    name: 'Adam',
    username: 'adamek',
    email: 'adam@adamek.abc',
}];

const posts = [{
    title: 'Ala ma kota',
    body: 'a kot ma Ale',
}];

// potrzebne do parsowania ciała żądania w formacie JSON
app.use(express.json()); 

// http://localhost:4700/users/add?name=Jan&username=janko&email=jan@nowak.abc
app.post('/users/add', (req, res) => {
    users.push(req.query)
    res.send(users);
});

// http://localhost:4700/users/
app.get('/users', (req, res) => {
    res.send(users);
});

// http://localhost:4700/users/0
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(users[id]);
});

// http://localhost:4700/users/delete/0
app.delete('/users/delete/:id', (req, res) => {
    const { id } = req.params;
    users.splice(id, 1);
    res.send(users);
});

// http://localhost:4700/posts/add/
app.post('/posts/add', (req, res) => {
    // pobranie obiektu z ciała żądania
    const newPost = req.body;
    posts.push(newPost)
    res.send(posts);
});

// http://localhost:4700/posts/
app.get('/posts', (req, res) => {
    res.send(posts);
});

// http://localhost:4700/posts/0
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    res.send(posts[id]);
});

// http://localhost:4700/posts/delete/0
app.delete('/posts/delete/:id', (req, res) => {
    const { id } = req.params;
    posts.splice(id, 1);
    res.send(posts);
});

app.listen(4700, () => console.log('Start server'));
