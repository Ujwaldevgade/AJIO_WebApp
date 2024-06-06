// backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Add this line to parse JSON bodies

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
