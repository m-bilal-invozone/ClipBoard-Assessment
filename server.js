const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const filters = require('./data/filters.json');
const jobs = require('./data/jobs.json');


const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());

app.get('/get-filters', ((req, res) => {
  res.json({filters});
}));
app.get('/get-jobs', ((req, res) => {
  res.json({jobs});
}));

app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});
