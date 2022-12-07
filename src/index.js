let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
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

// ** set CORS to wildcard (all routes)
app.options('*', cors(corsOptions));

// ** import routes
let apiRoutes = require("./api-routes");
// ** configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// ** connect to MongoDb and set connection variable
mongoose.connect(`mongodb://127.0.0.1:${process.env.DB_PORT}/mydb`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let db = mongoose.connection;

// ** added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// ** setup server port
let port = process.env.APP_PORT || 8083;

// ** send message for default URL
app.get('/', (req, res) => res.send('API'));

// ** use Api routes in the App
app.use('/api', cors(corsOptions), apiRoutes, cors(corsOptions));

// ** launch app to listen to specified port
app.listen(port, function () {
    console.log("API running on port " + port);
});
