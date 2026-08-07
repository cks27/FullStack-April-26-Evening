const express = require('express');
const path = require('node:path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/users', (req, res) => {
    console.log(req.query);
    res.send('YOU MADE A REQUEST TO GET ENDPOINT');
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send("YOU MADE A POST REQUEST!");
})

app.listen(3000, () => {
    console.log('server started at port 3000');
});


