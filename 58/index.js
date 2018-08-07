// const startupDebugger = require('debug')('app:startup');
// const dbDebugger = require('debug')('app:db');
const debug = require('debug')('app:startup');
const morgan = require('morgan');
const express = require('express');
const app =express();



if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
//   console.log('Morgan enabled...');
// startupDebugger('Morgan enabled...');
debug('Morgan enabled...');//console.log()

}

// Db work....
// dbDebugger('Connected to database...');



const port= process.env.PORT || 3000;


app.listen(port , () => console.log(`listening on port ${port}`))
