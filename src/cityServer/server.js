const express = require('express');
const bodyParser = require('body-parser');
const russia = require('./russia.json');
const cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

app.post('/', (req, res) => {
  const escapedValue = escapeRegexCharacters(req.body.value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");
  const result = russia.filter(language => regex.test(language.city));
  res.json(result);
});

app.listen(3001, () => {
  console.log('Server started');
});