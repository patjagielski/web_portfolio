const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const verifyJWT = (req, res, next) =>{
  const token = req.headers["x-access-token"]

  if(!token){
    res.send("No token? NO GO!")
  } else{
    jwt.verify(token, "jwtSecret", (err, decoded)=>{
      if(err){
        res.json({auth: false, message: "authentication failed :("});
      }else{
        req.userId = decoded.id;
        next();
      }
    })
  }
}



app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"pass",
  database:"tin_db",
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



app.get("/checkAuth", verifyJWT,(req, res)=>{
  res.send("Heck yeah I am authenticated ^-^");
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
      const token = jwt.sign({idUser},"jwtSecret", {
        expiresIn: 300,
      })
      console.log(token);

      res.json({auth: true, token: token, result: rows})
    }else{
      res.json({auth: false, message: "mp user exists"})
    }
  })
})

const port = process.env.PORT || 5000;
app.listen(port);
console.log("app is listening to " + port)