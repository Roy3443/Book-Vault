dotenv.config();
import express from "express";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';



const app  = express();

app.use(express.json());

// app.use(
//     cors({
//         origin:'http://localhost:5173',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: [],
//     })
// );

app.use(cors())
app.get('/', (request, response)=>{
    console.log(request)
    response.status(234).send('welcome to book store')
});

app.use('/books', booksRoute);

mongoose.connect(process.env.mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App connected to the database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });
module.exports = app;
