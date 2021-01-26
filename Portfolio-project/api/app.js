const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const app = express();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const { send } = require('process');
app.use(express.json());
app.use(cors());
app.use(express.static(path.join("./upload/")));
const x = multer({dest:"upload/"})
const fileMiddleware = x.single("CV");

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
      // console.log(row)
    }
  });
});

// app.post('/postmyCVdaddy', fileMiddleware, (req, res)=>{
//   console.log(req.file);
//   console.log(req.body);
//   console.log("congrats we won!");
// })

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
      // console.log(rows)
    }
  })
})

app.get("/checkAuth", verifyJWT,(req, res)=>{
  console.log("Heck yeah I am authenticated ^-^");
  res.send(true);
})

app.post("/getUser",(req, res)=>{
  
  const id = req.body.id;

  connection.query("SELECT * FROM user_info u, contact_me c WHERE c.userId=u.userId AND u.userId=?", [id], (err, rows)=>{
    if(err){
      throw err
    }else{
      res.send(rows);
    }
  })
})

app.get("/startGetCV", (req, res)=>{
  const id = 2
  
  connection.query("SELECT userCVFilePath, userCVFileType, userCVName FROM user_info WHERE userId=?", [id], (err, rows)=>{
    if(err){
      throw err
    }else{
      console.log(id);
      res.sendFile(path.join(__dirname, `/upload/${rows[0].userCVName}`));
    }
  })
})

app.post("/getUserCV",(req, res)=>{
  
  const id = req.body.id;

  connection.query("SELECT * FROM user_info WHERE userId=?", [id], (err, rows)=>{
    if(err){
      throw err
    }else{
      res.send(rows);
    }
  })
})

app.post("/editDashboard",fileMiddleware, (req, res)=>{
  const id = req.body.id
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const userWork = req.body.userWork
  const userEducation = req.body.userEducation
  const userBio = req.body.userBio
  // const userCV = req.file
  const fileName = req.file.filename;
  const fileType = req.file.mimetype;
  const filePath = path.join(__dirname,"upload",fileName)

  connection.query("UPDATE user_info SET firstName=?, lastName=?, userWork=?, userEducation=?, userBio=?, userCVName=?, userCVFilePath=?, userCVFileType=? WHERE userId = ?", [firstName,lastName,userWork, userEducation, userBio, fileName, filePath, fileType, id],(err,rows)=>{
    if(err){
      // throw err
    }else{
    
      res.send(rows)
    }
  })
})


app.post("/editContact", (req, res)=>{
  const id = req.body.id
  const insta = req.body.instagramLink
  const linked = req.body.linkedInLink
  const fb = req.body.facebookLink 
  const git = req.body.githublink
  // console.log(req.body)
  connection.query("UPDATE contact_me SET instagramLink=?, linkedInLink=?, facebookLink=?, githublink=? WHERE userId = ?", [insta,linked,fb,git, id],(err,rows)=>{
    if(err){
      throw err
    }else{
      // console.log(res)
      res.send(rows)
    }
  })
})

app.post("/getContactInfo", (req, res)=>{
  
  const id = req.body.id;

  connection.query("SELECT * FROM contact_me c, user u WHERE u.userId = c.userId AND c.userId=?", [id], (err, rows)=>{
    if(err){
      throw err
    }else{
      res.send(rows);
    }
  })
})

app.get("/getJobs", (req, res)=>{
  const pageNo = req.query.pageNo;

  connection.query("SELECT * FROM jobs_listings j, user_info u WHERE u.userId = j.userId LIMIT ?,2 ",[(pageNo-1)*2], (err, rows)=>{
    if(err){
      throw err
    }else{
      res.send(rows);
    }
  })
})

app.get("/getJobCount", (req, res)=>{

  connection.query("SELECT Count(1) as numberOfJobs FROM jobs_listings", (err, rows)=>{
    if(err){
      throw err
    }else{
      res.send(rows);
    }
  })
})

app.get("/getAllusers", (req, res)=>{

  connection.query("SELECT * FROM user u, role_user ru, roles r, user_info ui WHERE u.userId = ui.userId AND u.userId = ru.userID AND r.roleId = ru.roleId", (err, rows)=>{
    if(err){
      throw err
    }else{
      res.send(rows);
    }
  })
})

app.get("/allFreelancers",(req, res)=>{
  connection.query("SELECT * FROM  user_info ui, role_user ru WHERE ui.userId = ru.userID AND ru.roleId = 3;",(err, rows)=>{
    if(err){
      res.send({err})
    }else{
      res.send(rows);
    }
  })
})

app.post("/login",(req, res)=>{
  const username = req.body.username;
  const password = req.body.password;

  connection.query("SELECT * FROM user u, role_user ru, roles r WHERE u.userId = ru.userID AND r.roleId = ru.roleId AND u.username = ? AND u.password = ? ;", [username, password], (err, rows)=>{
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

app.post("/removeUser", (req, res)=>{
  const id = req.body.id;
  connection.query("DELETE FROM user WHERE userId = ?",[id], (err, rows)=>{
    if(err){
      throw err;
    }else{
      res.send(rows);
    }
  })
})

app.get("/getRecruiterJobs", (req, res)=>{
    const id = req.query.id;

    connection.query("SELECT * FROM jobs_listings WHERE userId=?", [id], (err, rows)=>{
      if(err){
        throw err;
      }else{
        res.send(rows);
      }
    })
})

app.post("/createJobPosting", (req, res)=>{
  const id = req.body.id;
  const jobTitle = req.body.jobTitle;
  const techRequirements = req.body.techRequirements;
  const levelOfExpertise = req.body.levelOfExpertise;
  const jobDescription = req.body.jobDescription;

  connection.query("INSERT INTO jobs_listings(userId, jobTitle, techRequirements, levelOfExpertise, jobDescription) VALUES (?,?,?,?,?)", [id, jobTitle, techRequirements, levelOfExpertise, jobDescription], (err, rows)=>{
    if(err){
      throw err;
    }else{
      console.log("job created");
      res.send(rows);
    }
  })
})

app.get("/getJobListing", (req, res)=>{
  const id = req.query.jobId;
  console.log(id);
  connection.query("SELECT * FROM jobs_listings WHERE jobId = ?", [id], (err, rows)=>{
    if(err){
      throw err
    }else{
      res.send(rows);
    }
  })
})

app.post("/editJobPosting", (req, res)=>{
  const id = req.body.id;
  const jobTitle = req.body.jobTitle;
  const techRequirements = req.body.techRequirements;
  const levelOfExpertise = req.body.levelOfExpertise;
  const jobDescription = req.body.jobDescription;

  connection.query("UPDATE jobs_listings SET jobTitle = ?, techRequirements = ?, levelOfExpertise=?, jobDescription=? WHERE jobId = ?", [jobTitle, techRequirements, levelOfExpertise, jobDescription, id], (err, rows)=>{
    if(err){
      throw err;
    }else{
      console.log("job created");
      res.send(rows);
    }
  })
})

app.post("/removeJobPosting", (req, res)=>{
  const id = req.body.id;
  connection.query("DELETE FROM jobs_listings WHERE jobId = ?",[id], (err, rows)=>{
    if(err){
      throw err;
    }else{
      res.send(rows);
    }
  })
})

const port = process.env.PORT || 5000;
app.listen(port);
console.log("app is listening to " + port)