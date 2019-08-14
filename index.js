// Import express
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Import routes
let apiRoutes = require("./api-routes");
let mongoConnect = require('./util/database');

// Initialize the app
let app = express();


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'));

// Use Api routes in the App
// app.use('/api', apiRoutes);

// Launch app to listen to specified port
// app.listen(8080, function () {
//      console.log("Running RestHub on port " + port);
// });

mongoConnect((client) =>{
    console.log(client);
    app.listen(8080);
})