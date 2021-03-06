const express = require('express');
const app = express();
const port = 8080;


const project = require('./package.json');
console.log(`version = ${project.version}`);
console.log(`author = ${project.author.name} <${project.author.email}>`);
console.log(`contributors = ${project.contributors}`);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/docker', (req, res) => {
  res.send('Hello, Docker World!');
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Application has been terminated.');
  });
});
