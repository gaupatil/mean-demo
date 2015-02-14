var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

// /main.html -> /app/main.html
app.use(express.static('app'));
app.use(bodyParser.json());

app.get('/api/cats', function (req, res) {
    Cat.find(function (err, cats) {
        if (err) {
            res.send(500);
        } else {
            res.json(cats);
        }
    })
});

app.post('/api/cats', function (req, res) {
    var kitty = new Cat({ name: req.body.name });
    kitty.save(function (err) {
        if (err) {
            res.send(500);
        } else {
            res.send(kitty);
        }
    });
});

var server = app.listen(3000);
