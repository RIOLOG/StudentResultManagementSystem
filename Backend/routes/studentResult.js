const express = require('express');
const connection = require('../connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());



app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.json());



// router.post('/studentresult', async (req, res) => {
//     try {
//         const user = req.body;
//         const query = "SELECT * FROM student_result WHERE rollno = ? AND DOB = ?";
        
//         const results = await connection.query(query, [user.rollno, user.DOB]);
        
//         if (results.length <= 0) {
//             res.status(404).json({ message: "Data not found" });
//         } else {
//             res.status(200).json(results);
//         }
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Something went wrong" });
//     }
// });


router.post('/studentresult', (req,res) => {
    let token;
    let user = req.body;
    query = "select * from student_result where rollno = ? and DOB =?"
    // connection.query(query,[user.studentroll,user.studentdob],(err,results)=>{
    connection.query(query,[user.rollno,user.DOB],(err,results)=>{
        try{

        // console.log(results);
        // console.log(user);
        if(err){
            console.log("2");
            res.status(500).json({message : "something went wrong"})
        }
        else{
            console.log("3");
            res.status(200).json(results);
        }
    }
    catch(error)
    {
        if(!err){
            if(results.length <= 0)
            {
                //console.log(results);
                console.log("1");
                // console.log(user.studentroll);
                // console.log(user.studentdob);
                // console.log(user);
                res.status(500).json({message : "data not found"})
            }    
        }
    }

    })
})


module.exports = router;