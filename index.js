const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const PORT = 5000;
const DB_URL = 'mongodb+srv://jackxn:Noseblunt420!@cluster0.ksnood6.mongodb.net/test'

mongoose.connect(DB_URL).then(() => {
    console.log('access to database is granted')
})
.catch((error) => {
    console.log(error)
});

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT || 5000,  () => console.log(`Backend server is running on PORT ${PORT}`))