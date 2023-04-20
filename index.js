import express from 'express'
// import mongoose from 'mongoose'
import * as dotenv from "dotenv";

import connectDB from './src/connect.js';

dotenv.config();


const app = express();


app.get('/', (req, res) => {
    res.send('Hello')
})



async function connect () {
    // we are using async because we don't know how long it will take to connect

    try{
        app.listen(4000, () => {
            connectDB(process.env.MONGODB_PASS);
            console.log("Server is starting on port 4000");
        });
    } catch(error){
        console.log(error);
    }
}
connect();

