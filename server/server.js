const express = require('express');
const app = express();
const path = require('path');

// app.use('/build', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../build'));
// });

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/login', (req, res) => {
  console.log('made it to server');
  return res.status(200).sendFile(path.join(__dirname, '../login.html'));
})

// app.get('/login', express.static(path.join(__dirname, '../login.html')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Page Not Found
app.use((req, res) => {
  return res.status(404).send('Error 404: Page Not Found');
})

// Global error handler



app.listen(3000);