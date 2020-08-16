const express = require('express');
const mongoose = require('mongoose');

const houses = require('./routes/houses');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the house listing API');
});

app.use('/api/houses', houses);

require('dotenv').config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(result => {
    app.listen(port, () => console.log(`Server is running on port ${port}`))
})

mongoose.connection.on("error", err =>{
    console.log(`DB connection error : ${ err.message}`)
});