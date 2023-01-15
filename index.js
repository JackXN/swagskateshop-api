const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const productRoute = require('./routes/product');


const PORT = 2000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL).then(() => {
    console.log('access to database is granted')
})
.catch((error) => {
    console.log(error)
});

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoute);



app.listen(PORT || 5000 ,  () => console.log(`Backend server is running on PORT ${PORT}`))