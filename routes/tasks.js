import Task from "../models/Task.js";
import auth from "../middleware/verifyToken.js";
import express from "express"

const router = express.Router();

// Get Route for All Task
router.get('/', async(req, res)=>{
    try{
        const tasks = await Task.find();
        if (tasks.length === 0){
            return res.status(200).json({messgae: 'No Tasks Found!'})
        }
        res.json(tasks);
    }
    catch (error){
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// Post Route for Posting New Task
router.post('/', async(req, res)=>{
    try{
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    }
    catch (error){
        res.status(400).json({error: 'Invalid Task Data Body'});
    }
});

//Get Route For Task Based on ID
router.get('/:id', auth, async(req, res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({error: 'Task not found against the ID'});
        }
        res.json(task);
    }
    catch (error){
        res.status(500).json({error: 'Internal Server Error'});
    }
});

//Put Route to Update the Task Fully
router.put('/:id', auth, async(req, res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if(!task){
            return res.status(404).json({error: 'Task not found against the ID'});
        }
        res.json(task);
    }
    catch (error){
        res.status(400).json({error: 'Invalid Task Data Body'});
    }
});

//Patch Route to Update the Task Partially
router.patch('/:id', auth, async(req, res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if(!task){
            return res.status(404).json({error: 'Task not found against the ID'});
        }
        res.json(task);
    }
    catch (error){
        res.status(400).json({error: 'Invalid Task Data Body'});
    }
});

//Delete Route to remove the Task from DB
router.delete('/:id', auth, async(req, res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({error: 'Task not found against the ID'});
        }
        res.json({message: 'Task Delete Successfully'});
    }
    catch (error){
        res.status(500).json({error: 'Inter Server Error'});
    }
});

export default router;
