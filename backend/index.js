import express from "express";
import { PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

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

mongoose.connect(mongoDBURL)
.then(()=> {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log(`App is listening to port : ${PORT}`);
    });
})
.catch((error)=> {
    console.log(error);
});
