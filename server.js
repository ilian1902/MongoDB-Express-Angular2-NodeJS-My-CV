let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let skills = require('./routes/skills');
let users = require('./routes/users');

let app = express();

let port = 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body parser midal ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', skills);
app.use('/skills', index);
app.use('/home', index);
app.use('/api', users);

app.listen(port, function() {
    console.log('Server started on port ' + port);
});