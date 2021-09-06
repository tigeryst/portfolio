const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
const viewsPath = path.join(__dirname, '/views');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use(express.static(path.join(__dirname, '/public')));

const redditData = require('./public/data/subreddits.json');

let comments = [
    {
        id: uuid(),
        username: 'Ted',
        comment: 'Go home and sleep. Nothing good ever comes after 2 am.'
    },
    {
        id: uuid(),
        username: 'Barney',
        comment: 'Hey, haveeee you met Ted?'
    },
    {
        id: uuid(),
        username: 'Lily',
        comment: 'Pause?'
    },
    {
        id: uuid(),
        username: 'Marshall',
        comment: 'Pause.'
    }
];

let posts = [
    {
        id: uuid(),
        username: 'tiger.y',
        image: '/images/baby-cat.jpeg',
        caption: 'Blissful childhood... sometimes I wish I\'m a cat',
        comments: [
            {
                user: 'Ted',
                comment: 'Ah.... catssssss'
            },
            {
                user: 'Barney',
                comment: 'Hey, haveeee you met Ted?'
            },
            {
                user: 'Lily',
                comment: 'Awwwwwww <3'
            }
        ]
    },
    {
        id: uuid(),
        username: 'colt',
        image: '/images/gumball.png',
        caption: 'I love candies',
        comments: [
            {
                user: 'Ted',
                comment: 'Ah.... catssssss'
            },
            {
                user: 'Barney',
                comment: 'Hey, haveeee you met Ted?'
            },
            {
                user: 'Lily',
                comment: 'Awwwwwww <3'
            }
        ]
    },
    {
        id: uuid(),
        username: 'foodie.grammer',
        image: '/images/hand_pink.png',
        caption: 'Best way to eat a doughnut without getting your hands dirty?',
        comments: [
            {
                user: 'Ted',
                comment: 'Ah.... catssssss'
            },
            {
                user: 'Barney',
                comment: 'Hey, haveeee you met Ted?'
            },
            {
                user: 'Lily',
                comment: 'Awwwwwww <3'
            }
        ]
    }
]

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/bootstrapdemo', (req, res) => {
    res.render('bootstrapdemo');
});

app.get('/candymuseum', (req, res) => {
    res.render('candymuseum');
});

app.get('/cats', (req, res) => {
    res.render('cats');
});

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id == id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
});

app.get('/forms', (req, res) => {
    res.render('forms');
});

app.get('/gallery', (req, res) => {
    res.render('gallery');
});

app.get('/instagram', (req, res) => {
    res.render('instagram/index', { posts });
});

app.get('/instagram/new', (req, res) => {
    res.render('instagram/new');
});

app.get('/instagram/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    res.render('instagram/show', { post });
});

app.get('/instagram/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    res.render('instagram/edit', { post });
});

app.patch('/instagram/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    post.caption = req.body.caption;
    res.redirect('/instagram');
});

app.delete('/instagram/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/instagram');
});

app.get('/jokester', (req, res) => {
    res.render('jokester');
});

app.get('/languageguesser', (req, res) => {
    res.render('languageguesser');
});

app.get('/patterns', (req, res) => {
    res.render('patterns');
});

app.get('/photogrid', (req, res) => {
    res.render('photogrid');
});

app.get('/pokedex', (req, res) => {
    res.render('pokedex');
});

app.get('/promiserainbow', (req, res) => {
    res.render('promiserainbow');
});

app.get('/purrfectmatch', (req, res) => {
    res.render('purrfectmatch');
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }
});

app.get('/randomcolor', (req, res) => {
    res.render('randomcolor');
});

app.get('/rusty', (req, res) => {
    res.render('rusty');
});

app.get('/scorekeeper', (req, res) => {
    res.render('scorekeeper');
});

app.get('/selectors', (req, res) => {
    res.render('selectors');
});

app.get('/tictactoe', (req, res) => {
    res.render('tictactoe');
});

app.get('/tvsearch', (req, res) => {
    res.render('tvsearch');
});

app.listen(3000, () => {
    console.log('Listening');
});