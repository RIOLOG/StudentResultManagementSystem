const express = require('express');
const connection = require('../connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());



app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.json());


//for particular student result:
router.get('/studentres/:rollno', (req,res) =>{
    const Roll = req.params.rollno;
    console.log(Roll);
    let user = req.body;
    //console.log(user);
    console.log("result for particular std");
    query = "select * from student_result where rollno = ? "
    // connection.query(query,[user.studentroll,user.studentdob],(err,results)=>{
    connection.query(query,[Roll],(err,results)=>{
        if(!err){
            console.log(results);
            if(results.length <= 0)
            {
                //console.log(results);
                console.log("1");
                res.status(500).json({message : "data not found"})
            }    
        }
        if(err){
            console.log("2");
            res.status(500).json({message : "something went wrong"})
        }
        else{
            console.log("3");
            res.status(200).json(results);
        }
    })
})

module.exports = router;