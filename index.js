const app = require('./app');
const express = require('express');
const connectdb = require('./db');
const router = express.Router();
const user = require('./routes/user')

const PORT=5500;

// connect to database
connectdb();
// body parser
app.use(express.json());

app.get('/',(req,res) =>  { 
    console.log("i am inside home page route handler");
    res.send("hello jee welcome to codehelp");

}
)

app.listen(PORT, () => {
    console.log("server is up")
})