const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for demo purposes
let resumes = [];

app.get('/api/resume', (req, res) => {
  res.json(resumes);
});

app.post('/api/resume', (req, res) => {
  const resume = req.body;
  resume.id = resumes.length + 1;
  resumes.push(resume);
  res.status(201).json({ message: 'Resume created successfully', id: resume.id });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
