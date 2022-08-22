const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('./models/blogs')

dotenv.config();

// my express app
const app = express()

// template/views engine
app.set('view engine', 'ejs')

// connect to database
mongoose.connect(process.env.MONGO_URL)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err))

// // listen
// app.listen(5000);

// static file
app.use(express.static('public'));

// mongoose and mongo sandbox route
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog ({
//         title: 'My new blog',
//         snippet: 'About my new blog',
//         body: 'More about my new blog'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// routes
app.get('/', (req, res) => {
    // res.sendFile('./display/index.html', { root: __dirname })
    // const blogs = [
    //     {title: 'Banana frits from Banana', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    //     {title: 'Apple Juice from the East', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    //     {title: 'Are these really dragon berries?', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    // ]
    // res.render('index', { title: 'Vitamins and Minerals', blogs})
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    // res.sendFile('./display/about.html', { root: __dirname })
    res.render('about', { title: 'About'})
});

// blogs routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All blogs', blogs: result})
        });
})
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog'})
});

// 404 page
app.use((req, res) => {
    // res.sendFile('./display/404.html', { root: __dirname })
    res.render('404', { title: '404'})
})