const express = require('express');
const connectToMongo = require('./db');

const app = express();
const port = 3000;

// Connect to MongoDB
connectToMongo();

app.get('/', (req, res) => {    // endpoint
    res.send('Hello World!')
})

// Your other app setup code here

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
