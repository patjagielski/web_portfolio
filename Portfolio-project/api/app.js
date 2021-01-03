const mysql = require('mysql');
const express = require('express');

const app = express();

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

app.get("/checkLogin",(req, res)=>{
  var username = req.username;
  var password = req.password;
  connection.query("SELECT EXISTS(SELECT * FROM user WHERE username=? and password=?", [username, password], (err, rows)=>{
    if(err){
      throw err
    }else{
      return true;
    }
  })
})

// connection.query('CREATE TABLE tabletest(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, something VARCHAR(255) NOT NULL)', (err,rows)=>{
//   if(err){
//     throw err
//   }else{
//     console.log("YEEEEEE")
//     console.log(rows);
//   }
// })
connection.query("INSERT INTO tabletest(id, something) VALUES (2, 'yeehawwwww')", (err, rows)=>{
  if(err){
    throw err
  }else{
    console.log("YYEEE")
    console.log(rows);
  }
})

const port = process.env.PORT || 5000;
app.listen(port);
console.log("app is listening to " + port)