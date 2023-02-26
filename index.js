require('./db');  //Miaraka starteny amn app ny bd
const express = require('express');
const bodyParser = require('body-parser');


var postMessageRoutes = require('./controllers/postMessageController')


var app = express()
app.use(bodyParser.json());
app.listen(8000, () => {
    console.log(`Server started on port 8000`);
});


app.use('/postMessages', postMessageRoutes)