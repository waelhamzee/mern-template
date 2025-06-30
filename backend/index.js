require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Backend running. NODE_ENV not set to production.');
  });
}

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
