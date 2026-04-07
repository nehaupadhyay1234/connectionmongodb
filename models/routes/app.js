const express = require('express');
const router = express.Router();

const user=require('../models/usermodel');

// routes

// crud operations

// view read
router.get('./users',async(req,res) => {
    try {
        const users=await user.find();
        res.status(200).json(users);
    }
    catch(error){

        res.status(500).json({
            success:false,
        message:err.message
        })
       
    }

})
router.post('/users',async(req,res) => {
    try{
        const {name,age,weight} = req.body;
        const newuser=new user({name,age,weight});
        await user.save(newuser);


    }
    catch(err){
        res.status(500).json({
            success:false,
            message: err.message
        })

    }
})



module.exports=router;