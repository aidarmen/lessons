const express = require('express');
const app =express();
// added nodemon ( nodemon index.js)
app.get('/', (req,res) => {
   res.send('Helo World!!!');
})


app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});


const port= process.env.PORT || 3000;


app.listen(port , () => console.log(`listening on port ${port}`))
