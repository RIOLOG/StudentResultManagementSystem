const express  = require('express');
const connection = require('../connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
const authenticate = require("../middleware/authenticate")
app.use(cors());



app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.json());


router.get('/allstudentdetails', (req,res) => {
    let user = req.body;
    //console.log(user);
    query = "select * from student_result";
    connection.query(query,(err,results) => {
        //console.log(results);
        if (!err)
        {
            if (results.length <= 0)
            {
                console.log("h1");
                res.status(500).json({message:"data not found"});
            }
        }
        if(err){
            console.log("h2");
            res.status(500).json({message : "something went wrong"})
        }
        else{
            console.log("h3");
            res.status(200).json(results);
        }
    })
})
module.exports = router;