const express = require('express');
const connection = require('../connection');
const router = express.Router();
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());


// console.log(path.join(__dirname, "../Frontend"));
// const staticPath = path.join(__dirname, "../Frontend");

//connecting html page:
app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.json());
// app.use(express.static(staticPath));



router.post("/adminlogin",(req,res) =>{
    let user = req.body;
    query = "select * from admin where name = ? and email = ?";
    connection.query(query,[user.adminName, user.adminEmail],(err,results)=>{
        if(!err){
            if(results.length <= 0)
            {
                //console.log("1");
                // console.log(user.name);
                // console.log(user.email);
                // console.log(user);
                res.status(500).json({message : "data not found"})
            }    
        }
        if(err){
            //console.log("2");
            res.status(500).json({message : "something went wrong"})
        }
        else{
            console.log("ADMIN 3");
            res.status(200).json(results);
        }
    })
})


module.exports = router;