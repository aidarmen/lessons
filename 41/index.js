const express = require('express');
const app =express();
// added nodemon ( nodemon index.js)
app.get('/', (req,res) => {
   res.send('Heloo World!!!');
})


app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.listen(3000, () => console.log('listening on port 3000'))
