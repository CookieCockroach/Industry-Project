const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json())

let questions = [];

fs.readFile(path.join(__dirname, 'questions.json'), 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading questions file:', err);
    return;
  }
  questions = JSON.parse(data);
});

fs.readFile(path.join(__dirname, 'days.json'), 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading questions file:', err);
    return;
  }
  days = JSON.parse(data);
});

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.get('/api/days', (req, res) => {
  res.json(days);
});

app.post('/api/days', (req, res) => {
  try {
    const result = req.body.result; 
    const dayToUpdate = days.find(day => day.id === 1);
    if (dayToUpdate) {
      dayToUpdate.result = result;
      fs.writeFileSync('./days.json', JSON.stringify(days, null, 2));
      res.status(200).json({ message: 'Day updated successfully.' });
    } else {
      res.status(404).json({ error: 'Day not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
