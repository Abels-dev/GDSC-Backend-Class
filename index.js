const express = require('express');
const helloWorldApp = express();
const port = 3000;

helloWorldApp.get('/', (req, res) => {
  res.send('Hello World');
});
helloWorldApp.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
