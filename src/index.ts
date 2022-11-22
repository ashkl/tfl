import * as dotenv from 'dotenv';
dotenv.config()
import express = require("express");

const jamCamRouter = require('../JamCamRoutes/JamCamRoutes')

const PORT = 5000;
const app: express.Application = express();

// app.use(cors);
app.use(jamCamRouter);
app.use(express.json());

app.listen(PORT, function () {
    console.log(`Running on port: ${PORT}`);
})