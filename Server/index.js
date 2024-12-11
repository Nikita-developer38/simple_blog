const express = require("express")
const mysql = require("mysql2")

const dotenv = require("dotenv")
dotenv.config()

const port = process.env.port
const cors = require('cors');

const app = express()
app.use(cors());

app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "RootPassword",
    database: "blogApp",
    port: 3307
})


app.get("/", (req, res) => {
    db.query(`SELECT * FROM blog`, (err, result) => {
        if (err) return res.status(400).json({ message: err })
        res.status(200).json(result)

    })
})

app.get("/:id", (req, res) => {
    const { id } = req.params
    db.query(`SELECT * FROM blog WHERE id=${id}`, (err, result) => {
        if (err) return res.status(400).json({ message: err })
        res.status(200).json({ message: result })
    })
})

app.post("/addBlog", (req, res) => {
    const { title, descriptions, dated, image, author, category } = req.body;
    db.query(`INSERT INTO blog (title,descriptions,dated,image,author,category) VALUES ('${title}','${descriptions}','${dated}','${image}','${author}','${category}')`, (err, result) => {
        if (err) res.status(400).json({ message: err })
        res.status(200).json({ message: "successfully added" })
    })
})

app.put("/updateBlog/:id", (req, res) => {
    const { title, descriptions, dated, image, author, category } = req.body
    const { id } = req.params;
    db.query(`UPDATE blog SET title="${title}",descriptions="${descriptions}",dated="${dated}",image="${image}",author="${author}",category="${category}" WHERE id=${id}`, (err, result) => {
        if (err) return res.status(400).json({ message: err })
        res.status(200).json({ message: "successfully updated" })
    })
})

app.delete("/deleteBlog/:id", (req, res) => {
    const { id } = req.params
    db.query(`DELETE FROM blog WHERE id=${id}`, (err, result) => {
        if (err) return res.status(400).json({ message: err })
        res.status(200).json({ message: "successfully deleted" })
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})