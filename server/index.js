const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://User:12345@first-cluster.rkmh4kc.mongodb.net/test?retryWrites=true&w=majority")
.then(() => {app.listen(PORT, () => console.log("server is up and running"))});

const db = mongoose.connection;

db.once('open', () => {console.log("connected to DB")});

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', postRoutes)



