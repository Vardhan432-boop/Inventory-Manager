import express from 'express'
import itemSchema from '../models/ItemModel.js'
const router=express.Router();
router.get("/",async(req,res)=>{
    const list=await itemSchema.find()
    res.json(list)
});
router.get("/:id",async(req,res)=>{
    const item=await itemSchema.findById(req.params.id)
    res.json(item);
})
router.post("/add",async(req,res)=>{
    const {name,quantity,price}=req.body;
    const newitem=new itemSchema({
        name,
        quantity,
        price,
    })
    newitem.save();
    res.send("item added successfully");
})
router.put("/update/:id",async(req,res)=>{
    const updateditem=await itemSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(updateditem)
})
router.delete("/delete/:id",async(req,res)=>{
    await itemSchema.findByIdAndDelete(req.params.id)
    res.json("item deleted");
})
export default router;