const express = require('express');

const app = express();

// Express will execute this app.use for any incoming request
// app.use((req, res) => {
//     console.log('Inside my app.use()');
//     res.send('<h1>Hello from express server</h1>');
// });

app.get('/', (req, res) => {
    res.send('Home route');
});

app.get('/cat', (req, res) => {
    // database
    res.send('Meoow Meeooww');
});

app.get('/dog', (req, res) => {
    res.send('Woof Woof');
});

app.get('/login', (req, res) => {
    res.send('Login route');
});

app.get('/users', (req, res) => {
    res.send('GET - user route');
});

app.post('/users', (req, res) => {
    res.send('POST - user route');
});

// app.get('/r/cat', (req, res) => {
//     res.send('Cat subredit');
// });

// app.get('/r/dog', (req, res) => {
//     res.send('Dog subredit');
// });

// app.get('/r/apples', (req, res) => {
//     res.send('Apple subredit');
// });

app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    res.send(`You are looking for ${subredit} subredit`);
});

app.get('/products', (req, res) => {
    const { sort ='ASC' } = req.query;
    res.send(`Sending the product order by price - ${sort}`);
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});





