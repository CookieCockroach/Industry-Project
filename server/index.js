// backend/index.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

app.use(cors());

let questions = [];

fs.readFile(path.join(__dirname, 'questions.json'), 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading questions file:', err);
    return;
  }
  questions = JSON.parse(data);
});

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
