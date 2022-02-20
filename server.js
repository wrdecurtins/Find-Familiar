require('module-alias/register');
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from '@/models';
import init_db from '@/static/init_db';
import routes from '@/routes/routes';

const app = express();

db.sequelize.sync({ alter: true }).then((res) => {
  // init_db();
});
// db.sequelize.sync({ force: 1 }).then(() => {
//   console.log('Drop and re-sync db.');
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

routes(app);
// require('@/routes/test.routes')(app);
// require('@/routes/spell.routes')(app);

// set port, listen for requests
const PORT = process.env.LISTEN_PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
