var express = require('express');
var app = express();

app.use(express.static('./views'));

app.listen(8000, '192.168.0.101');