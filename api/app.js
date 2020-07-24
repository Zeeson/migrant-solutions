const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");


const port = 4000 || process.env.PORT;
const PORT = port; 
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Mongoose connection
dotenv.config();
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true}, () => console.log("Database connected!!!") ); 
const db = mongoose.connection;



// Check for DB connection
// db.once('open', function(){
//     console.log("Connected to MongoDB successfully!");
// });
// db.on('error', function(){
//     console.log(err);
// });

app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


// export Routes 
const users = require('./routes/router');
app.use('/api', users);


app.listen(PORT, function(){
    console.log('server started...');
})
