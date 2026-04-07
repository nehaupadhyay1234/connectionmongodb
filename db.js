const mongoose = require('mongoose');
const dotenv = require('dotenv');

// load env configurations
dotenv.config();




const coonectdb = async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI  ,{
            useNewUrlParser:true,
        });
        console.log('mongodb connected');
    }
    catch(error) {
        console.error(error.message);
        process.exit(1);
    }
}
 
app.get('/',(req,res) =>  { 
    console.log("i am inside home page route handler");
    res.send("hello jee welcome to codehelp");

}
)

module.exports = connnectdb;