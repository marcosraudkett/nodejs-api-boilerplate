// Import express
let express = require('express');
// Import CORS
let cors = require('cors');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

/* CORS options 
   * = Wildcard, Any domain can access this api
   you can change the origin to your own domain.
*/
let corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

/* set CORS to wildcard (all routes) */
app.options('*', cors(corsOptions));

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true});
let db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
let port = process.env.PORT || 8083;

// Send message for default URL
app.get('/', (req, res) => res.send('API'));

// Use Api routes in the App
app.use('/api', cors(corsOptions), apiRoutes, cors(corsOptions));

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("API running on port " + port);
});
