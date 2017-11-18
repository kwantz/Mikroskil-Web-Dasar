const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const models = require('./models');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(morgan('combine'));
app.use(bodyParser.json());

routes(app);

models.sequelize.sync().then(() => {
    app.listen(config.port);
    console.log(new Date(), new Date().toString());
    console.log("Status: Server is running...");
})
