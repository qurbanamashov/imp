const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("<h1>ADMIN PANEL</h1>")
})
const { Schema } = mongoose
const userSchema = new Schema({
    imgurl: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true }

})
const Users = mongoose.model("users", userSchema)

app.get("/users", (req, res) => {
    Users.find((err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(404).json({ massage: err })
        }
    })
})
app.delete("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("delete")
        }
        else {
            res.status(404).json({ massage: err })
        }
    })
})

app.post("/users", (req, res) => {
    const user = new Users({
        imgurl: req.body.imgurl,
        name: req.body.name,
        price: req.body.price
    })
    user.save()
    res.send("save api yessssss")
})

app.get("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
        else {
            res.status(404).json({ massage: err })
        }
    })
})
const PORT = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("server bd")
        app.listen(PORT, () => {
            console.log("server db");
        })
    }
})