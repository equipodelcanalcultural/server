const express = require("express");
const bodyParser = require("body-parser");
const city = require("./city");
const itinerary = require("./itineraries.js");
const activity = require("./activities.js");
const app = express();
const port = process.env.PORT || 4000;
const getRoutes = require("./Routes/get");
const postRoutes = require("./Routes/post");
const putRoutes = require("./Routes/put");
const database = require('./database');
const passport = require('passport');
const deleteRoutes = require("./Routes/delete");
const path = require('path');
//passport middleware
app.use(passport.initialize());
//passport configuration
require("./passport.js");
require("./googlestrategy.js");

app.listen(port, () => console.log(`server running on port ${port}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", [getRoutes,postRoutes, putRoutes, deleteRoutes]);
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(_dirname + "/client/build/index.html"))
    })
}
