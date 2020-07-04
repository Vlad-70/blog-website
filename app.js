const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => res.send("It's Ok, I'm working :)"));

app.listen(3000, () => console.log('Server is running on port 3000'));
