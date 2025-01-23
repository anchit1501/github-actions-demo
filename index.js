// index.js
const express = require('express');
const app = express();
const port = 3000;

// A single GET endpoint that returns a simple JSON message
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
