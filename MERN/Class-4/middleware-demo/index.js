const express = require('express');

const app = express();

const APP_API_KEY = 'apple';

const verifyApiKey = (req, res, next) => {
    const { apiKey } = req.query;
    if (apiKey === APP_API_KEY) {
        return next();
    }
    return res.send("Invalid API Key");
}

app.use((req, res, next) => {
    req.greeting = "Hello from first middleware"
    console.log('Inside my first middleware');
    return next();
    console.log('Inside my first middleware after calling next');
});

app.use((req, res, next) => {
    const { greeting } = req;
    console.log(greeting);
    console.log('Inside my second middleware');
    return next();
    console.log('Inside my second middleware after calling next')
});

app.get('/hello', (req, res, next) => {
    console.log('Inside the hello endpoint');
    res.send('Hello from server'); 
});

app.get('/secret', verifyApiKey,  (req, res) => {
    res.send('I wear headphones in public so that i dont have to talk to anyone!');
});

app.listen(3000, () => {
    console.log('server started at 3000');
});