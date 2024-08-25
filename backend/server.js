const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
const users = [];

app.use(cors())
app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const user = req.body.user;
    users.push(user);
    res.json({message: 'user added'});
});

const port = 3080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
