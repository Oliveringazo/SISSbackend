const express=require('express');
const app= express();
const port = 5000;
const studentRouter=require('./routes/students');
const socialProgramRouter=require('./routes/programs');
let bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use('/students',studentRouter);
app.use('/programs',socialProgramRouter);


app.listen(port,()=>console.log('Server Started at http://localhost:'+port));
