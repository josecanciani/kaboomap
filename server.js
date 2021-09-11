const express = require('express');
const port = 8080;
const app = express();

// static rules
app.use(express.static('public'));
app.use('/modules/kaboom', express.static('node_modules/kaboom/dist'));


// dynamic rules
app.get('/api/version', (req, res) => {
    res.json({ version: '1.0' });
});

// start listeting
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
