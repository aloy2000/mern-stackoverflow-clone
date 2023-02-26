const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://127.0.0.1:27017/postManagerDB",{useNewUrlParser: true, useUnifiedTopology: true},
    err =>{
        if(!err) console.log("connected successfully !")
        else console.log('Error de connection ' + err)
    }
)