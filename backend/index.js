const express = require('express');
const connectToMongo = require('./db');

const app = express();
const port = 3000;

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

// Your other app setup code here

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
