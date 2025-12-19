import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/ItemRoutes.js'
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected Successfully"))
.catch(()=>console.log("failed"));
app.use("/",router)
app.listen(5000,()=>{
    console.log("server running successfully")
})