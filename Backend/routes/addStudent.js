const express = require('express');
const connection = require('../connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
const authenticate = require("../middleware/authenticate")
app.use(cors());



app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.json());



router.post('/add',(req,res) => {
    let user = req.body;
    query = "INSERT INTO student_result (rollno,name,DOB,marks) VALUES (? , ? , ? , ?)";
    connection.query(query,[user.rollno,user.name,user.DOB,user.marks], (err, results) => {
        console.log(user);
        if(!err){
            if(results.length <= 0)
            {
                //console.log("1");
                res.status(500).json({message : "data not found"})
            }    
        }
        if(err){
            //console.log("2");
            res.status(500).json({message : "something went wrong "})
        }
        else{
            //console.log("3");
            res.status(200).json(results);
        }
    })
})




module.exports = router;