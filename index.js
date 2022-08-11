import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { authRouter, usersRouter, roomsRouter, hotelsRouter } from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();

dotenv.config();

// initial connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB); 
        console.log('connected to db');
    } catch (error) {
        throw error; 
    }
};

// log if the connection to the db is ok
mongoose.connection.on('disconnected', () => {
    console.log('mongodb disconnected');
})

// log if the connection to the db is off
mongoose.connection.on('connected', () => {
    console.log('mongodb connected');
})


// middlewares 
app.use(cors())
app.use(cookieParser())
// allow to send json 
app.use(express.json())

app.use('/api/auth', authRouter);
app.use('/api/hotels', hotelsRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/users', usersRouter);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage  = err.message || 'Something went wrong'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        // stack give more details about the error
        stack: err.stack
    })
})

app.listen(8800, () => {
    // we first connect to the db
    connect()
    console.log('connected to back-end');   
})