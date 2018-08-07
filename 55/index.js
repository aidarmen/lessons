const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger =require('./logger');
const express = require('express');
const app =express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //key=value&key=value
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));


app.use(logger);



const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];

app.get('/', (req,res) => {
   res.send('Helo World!!!');
})


app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    
    const {error} = validateCourse(req.body);
    
    if (error) return   res.status(400).send(error.details[0].message);
   
  
    const course ={
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req,res) => {
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course)  return  res.status(404).send('the course with given id was not find')
         

    const {error} = validateCourse(req.body);
    
    if (error) 
        // 400 bad request
       return res.status(400).send(error.details[0].message);
        
    


    course.name= req.body.name;
    res.send(course);
})


function validateCourse(course) {
    const schema ={
        name: Joi.string().min(3).required()
    };


    return  Joi.validate(req.body,schema);
}


app.delete('/api/courses/:id', (req, res) => {
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('the course with given id was not find')


    //Delete
    const index = courses.find.indexOf(course);
    courses.splice(index, 1);

    res.send(course);


})

app.get('/api/courses/:id', (req, res) => {
  const course =  courses.find(c => c.id === parseInt(req.params.id));
   if (!course) return res.status(404).send('the course with given id was not find')
   res.send(course);
});


const port= process.env.PORT || 3000;


app.listen(port , () => console.log(`listening on port ${port}`))
