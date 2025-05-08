const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const videos = require('./routes/videos');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/videos', videos);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

const port = 3000;
app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
});