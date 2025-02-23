const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors')

const app = express();
const port = 5000;

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// Your other app setup code here

app.listen(port, () => {
    console.log(`logBook Backend Listening at http://localhost:${port}`);
});
