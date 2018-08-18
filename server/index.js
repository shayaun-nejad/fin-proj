const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  console.log(`serving request ${req.method} at ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, '../client/dist/')));

const PORT = process.env.PORT || 1888;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});

