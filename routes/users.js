import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Post Route for SignUp User
router.post('/signup', async(req, res)=>{
    const {email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({error: 'Email and Password both are required'});
    }
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error: 'User already exists against this Email'});
        }
        const user = new User({email, password});
        await user.save();

        //Generate JWT token on signup
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(201).json({message: 'User created successfully', token});
    }
    catch (error){
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// Post Route for SignUp User
router.post('/login', async(req, res)=>{
    const {email, password } = req.body;
    try{
        const user = await User.findOne({email});
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({error: 'Invalid email or password'});
        }

        //Generate JWT token on login
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({token});
    }
    catch (error){
        res.status(500).json({error: 'Internal Server Error'});
    }
});

export default router;
