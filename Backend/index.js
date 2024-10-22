/*
Installation                       Description

>npm init                           and give some information.
>npm i express                      connect with express.
>npm i nodemon                      Run automatically.
>npm i dotenv                       for env file for PORT and manualy import it.. import dotenv from 'dotenv' and change type:"modul" in json .

>npm i mongoose                     mongodb with connection to database.
>npm i cors         and   import cors from 'cors' for send data backend to frantend and install   >npm i axios    in frontend.
>npm i bcryptjs    and import bcryptjs from "bcryptjs"  in user.controller for convert pass into  hash password .



Running
>npm nodemon index.js
*/

//const express =require('express')
//const dotenv=require('dotenv')
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
const app=express()

dotenv.config();

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js'



const PORT=process.env.PORT || 4000 ;
const URI=process.env.MongodbURL;


//mongodb connection
try {
      mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
      })
      console.log('connect to mongodb')
    
} catch (error) {
    console.log("error:::",error)
}
//middleware
app.use(cors())
app.use(express.json());

//routes
app.use("/books",bookRoute);
app.use('/user',userRoute)



// app.get("/",(req,res)=>{
//     res.send("hello");
// })

app.listen(PORT,(err)=>{
    if(err){
        console.log("error:",err)
    }
    else{
        console.log(`Server is Running at port ${PORT}`)
    } 
})