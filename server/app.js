// const express = require('express'); ES5 old syntax common js syntax
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
// import './models/bookingModel.js'

// Database Connection
// import './dbConnect.js'
// import contactModel from './models/bookingModel.js';


const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Hello!");
})

// app.get('/contact', (req, res) => {
//     res.json({ status: 'Visited Localhost' });
// });

// app.post('/contact', async (req, res) => {
//     try {
//         console.log(req.body);
//         // let fileData = await fs.readFile('data.json');
//         // fileData = JSON.parse(fileData);
//         // fileData.push(req.body);
//         // await fs.writeFile('data.json', JSON.stringify(fileData));
        
//         // @MongoDB
//         const formData = new contactModel (req.body);
//         console.log(formData);
//         await formData.save();
//         res.json({ status: 'Data sent' });
//     } catch (error) {
//         console.log(error)
//     }
// })

app.listen(PORT, () => {
    console.log(`Server is running ${PORT} ✅`);
})