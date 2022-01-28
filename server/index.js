import express from "express";
import dotenv from "dotenv"
import {connect} from "./database/db-connect.js";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from 'cors'
import {router} from './routes/authorsRoutes.js'
dotenv.config();


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.use('/api/', router)
app.get('/', (req,res) => {
    res.send('Hello word');
});

app.listen(port, () => {
    connect()
    console.log(`Listening on port ${port}`);
})