const express = require('express');

// my express app
const app = express()

//template engine
app.set('view engine', 'ejs')

// listen
app.listen(5000);

app.get('/', (req, res) => {
    // res.sendFile('./display/index.html', { root: __dirname })
    const blogs = [
        {title: 'Banana frits from Banana', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {title: 'Apple Juice from the East', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {title: 'Are these really dragon berries?', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ]
    res.render('index', { title: 'Vitamins and Minerals', blogs})
});

app.get('/about', (req, res) => {
    // res.sendFile('./display/about.html', { root: __dirname })
    res.render('about', { title: 'About'})
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog'})
});

// 404 page
app.use((req, res) => {
    // res.sendFile('./display/404.html', { root: __dirname })
    res.render('404', { title: '404'})
})