const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) =>{
  const token = req.headers["x-access-token"]

  if(!token){
    res.send("No token? NO GO!")
  } else{
    jwt.verify(token, "jwtSecret", (err, decoded)=>{
      if(err){
        res.json({auth: false, message: "authentication failed :(", err:err});
      }else{
        req.userId = decoded.id;
        next();
      }
    })
  }
}


var connection = mysql.createConnection({
  host: "database-1.czkrpjn4yewq.eu-central-1.rds.amazonaws.com",
  user: "admin",
  password:"Jagielski1!",
  database:"tin",
  port:"3306"
})

connection.connect((err) =>{
  if(err){
    throw err
  }else{
    console.log("connected");
  }
})

app.post("/register", (req, res)=>{
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  connection.query("INSERT INTO user (username, password, email) VALUES (?,?,?)", [username, password, email], (err, row)=>{
    if(err){
      throw err
    }else{
      console.log(row)
    }
  });
});

app.post("/addNewUserInfo", (req, res)=>{
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userWork = req.body.userWork;
  const userEducation = req.body.userEducation;
  const userCV = req.body.userCV;

  connection.query("INSERT INTO user_info(userWork, userEducation, firstName, lastName, cv) VALUES(?,?,?,?,?)", [firstName, lastName, userWork, userEducation, userCV], (err, rows)=>{
    if(err){
      throw err
    }else{
      console.log(rows)
    }
  })
})

app.get("/checkAuth", verifyJWT,(req, res)=>{
  console.log("Heck yeah I am authenticated ^-^");
  res.send(true);
})

app.post("/getUser",(req, res)=>{
  
  const id = req.body.id;

  connection.query("SELECT * FROM user_info WHERE userId=?", [id], (err, rows)=>{
    if(err){
      console.log(err);
    }else{
      res.send(rows);
    }
  })
})

app.post("/getUserCV",(req, res)=>{
  
  const id = req.body.id;

  connection.query("SELECT * FROM user_info WHERE userInfo_id=?", [id], (err, rows)=>{
    if(err){
      console.log(err);
    }else{
      res.send(rows);
    }
  })
})



app.post("/login",(req, res)=>{
  const username = req.body.username;
  const password = req.body.password;

  connection.query("SELECT * FROM user WHERE username=? AND password=?", [username, password], (err, rows)=>{
    if(err){
      res.send({err:err})
    }

    if(rows.length > 0){

      const id = rows[0].id
      const token = jwt.sign({id},"jwtSecret", {
        expiresIn: 300,
      })
      console.log("creating token");

      res.json({auth: true, token: token, result: rows})
    }else{
      res.json({auth: false, message: "mp user exists"})
    }
  })
})

const port = process.env.PORT || 5000;
app.listen(port);
console.log("app is listening to " + port)