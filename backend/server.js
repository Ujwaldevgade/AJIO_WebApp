const express = require('express');
const app = express();

const PORT = 3001;

// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
