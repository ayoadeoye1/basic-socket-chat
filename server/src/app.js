import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// import router from './routes/user.routes.js';

dotenv.config();

const app = express();

// const MONGO_URL = process.env.MONGO_URL

// const mongoConnect = async() =>{
//     try {
//         const dataB = await mongoose.connect(MONGO_URL)
//         dataB && console.log('DB connected!')
//     } catch (error) {
//         console.log(`error in connection: ${error}`)
//     }
// }

// mongoConnect();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
   origin: "*" //'http://localhost:3000'
}));

app.use(express.static('build'));

// app.use('/api', router);

app.get('/*', (req, res) =>{
    res.sendFile('index.html', {root: 'build'})
})

export default app;