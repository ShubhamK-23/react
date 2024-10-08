import express from "express";
import mysql from "mysql2";
import cors from "cors"



const app = express();

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'myroot123',
    database: 'test'
})

app.get("/", (req, res)=> {
    res.json("Hello you reached backend successfully!")
})

app.get("/allusers", (req, res) => {
    const q = "Select * from users";
    db.query(q, (err, results) => {
        if (err) return res.json(err);
        return res.json(results)
    })
})

app.post("/allusers", (req, res) => {
    const q = "INSERT INTO users (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ];


    db.query(q, [values], (err, results) => {
        if (err) return res.status(500).json(err); 
        return res.status(200).json({ message: "User added successfully", results });
    })
})

app.delete("/allusers/:id", (req, res) => {
    const userId = req.params.id;
    const q = "DELETE FROM users WHERE id = ?";
    db.query(q, [userId], (err, results) => {
        if (err) return res.status(500).json(err); 
        return res.status(200).json({ message: "User deleted successfully", results });
    })
})

app.put("/allusers/:id", (req, res) => {
    const userId = req.params.id;
    const q = "UPDATE users SET `name`= ?, `email`= ?,`password`= ? WHERE id= ?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
    ];

    db.query(q, [...values,userId], (err, results) => {
        if (err) return res.status(500).json(err); 
        return res.status(200).json({ message: "User deleted successfully", results });
    })
})
app.listen(8888, ()=> {
    console.log("Connected to Backend")
})

