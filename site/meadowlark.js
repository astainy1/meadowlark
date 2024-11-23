//load require module
const express = require('express');
const app = express();
const path = require('path');
const fortunes = require('./lib/fortune');
const expressHandlebars = require('express-handlebars');
const port = process.env.PORT || 5000;

//Set up express views
app.set('view engine', 'handlebars'); //Default view engine

//Configure express-handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

//Set up views 
app.set('views', path.join(__dirname, 'views'));

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Home routes
app.get('/', (req, res) => {
    res.render('home', {title: 'Home | Meadowlark Travel'});
});

app.get('/about', (req, res) => {



    res.render('about', {fortune: fortunes.getFortunes(), title: 'About | Meadowlark Travel'});
});

//Setup custom 404
app.use((req, res) => {
    res.status(404);
    res.render('404', {title: '404 Page'});
})

//Setup custom 500 error handler
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500', {title: '505 - Server Error'});
})

//Run server with assigned port
app.listen(port, (err) => {
    if(err) return console.error('Error: ' + err.message);

    console.log(`Server is listening on (http://localhost:${port})
                Press Ctrl+C to quit...`);

})
