const express = require('express');
var cors = require('cors');
const connection = require('./connection');

//routes config
const studentdetailsRoute = require('./routes/studentResult');
const allstudentdetailsRoute = require('./routes/allstudentDetails');
const deletestudentRoute = require('./routes/deleteStudent');
const editstudentRoute = require('./routes/editStudent');
const addstudentRoute = require('./routes/addStudent');
const adminloginRoute = require('./routes/admin');
const resultRoute = require('./routes/studentroll')



const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//routes
app.use('/student',studentdetailsRoute);
app.use('/alldetails',allstudentdetailsRoute);
app.use('/deletestudent',deletestudentRoute);
app.use('/editstudent',editstudentRoute);
app.use('/addstudent',addstudentRoute);
app.use('/login',adminloginRoute);
app.use('/result',resultRoute)




module.exports = app;