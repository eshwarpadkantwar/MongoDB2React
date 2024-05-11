// index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Usermodel = require("../server/Models/User");

const app = express();
const PORT = 3006;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test");

app.get("/getusers", (req, res) => {
    Usermodel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.listen(PORT, () => {
    console.log("Server is running on the PORT:", PORT);
});
