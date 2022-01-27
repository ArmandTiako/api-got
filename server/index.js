import express from "express";
import dotenv from "dotenv"
import {connect} from "./database/mongo-db.js";
import bodyParser from "body-parser";
import helmet from "helmet";
const app = express();
const port = 5000;
dotenv.config();

app.use(bodyParser.json())
app.use(helmet())

app.get('/', (req,res) => {
    res.send('Hello word');
});

app.listen(port, () => {
    connect()
    console.log(`Listening on port ${port}`);
})