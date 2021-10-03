require('module-alias/register');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("@/models");

const app = express();

db.sequelize.sync();
// db.sequelize.sync({ force: 1 }).then(() => {
//     console.log("Drop and re-sync db.")
// });

var corsOptions = {
    origin: process.env.CORS_URL
};
console.log(corsOptions.origin);

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to bezkoder application."});
// });

require("@/routes/test.routes")(app);

// set port, listen for requests
const PORT = process.env.LISTEN_PORT ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
