/**
 * To run server command is : npm run server
 */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const items = require('./routes/api/Items');


const app = express();

//Bodyparse Middleware

app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose.connect(db, 
    { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(()=>console.log("MongoDB Connected...."))
    .catch(err =>console.log(err));

//Use Routes
app.use('/api/items',items);
const PORT = process.env.PORT || 5000;

// Serve static assets, if in production
if(process.env.NODE_ENV ==='production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
           res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});