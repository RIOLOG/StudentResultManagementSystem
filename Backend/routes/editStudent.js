const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.put('/edit/:rollno',  (req,res) => {
    console.log("MAI AARHE HUN");
    const Roll = req.params.rollno;
    console.log(Roll);
    let user = req.body;
    query = "update  student_result set name =? ,marks=?,DOB = ? where rollno = ?";
    connection.query(query,[user.name,user.marks,user.DOB,Roll],(err,results)=>{
        if(!err){
            if(results.length <= 0)
            {
                console.log("e1");
                res.status(500).json({message : "data not found"})
            }    
        }
        if(err){
            console.log("e2");
            res.status(500).json({message : "something went wrong"})
        }
        else{
            console.log("e3");
            res.status(200).json(results);
        }
    })
})


module.exports = router;