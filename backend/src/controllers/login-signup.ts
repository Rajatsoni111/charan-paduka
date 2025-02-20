import { Request, Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken'
import {PRODUCTS} from '../data/products';
// import productSchema from '../models/product';
// import Users from '../types/users';
// import 'dotenv/config'

const secret = process.env.JWT_SECRET as string || "lolopoposhosho";
// const expiresIn = process.env.JWT_EXPIRE || '1d'; // '1d' is the default if JWT_EXPIRE is not set

// logging the user in
export const loginHandler = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(404).send("invalid credentials");
        return;
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).send("invalid credentials");
            return;
        }
        if (await user.matchPassword(password)) {
            const token = jwt.sign({ id: user._id }, secret, { expiresIn: "7d" });
            res.json({ "message": "you have been loggen in", "token": token });
            return;
        }
        else {
            res.status(400).send("invalid credentials");
            return;
        }
    } catch (error) {
        res.status(500).send("something went wrong");
        return;
    }
}

// signing the user up
export async function signupHandler(req: Request, res: Response): Promise<void> {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
        res.status(400).send("invalid credentials");
        return;
    }
    try {
        // checking if the user already exists
        const check = await User.findOne({ email });
        if (check) {
            res.status(400).send("user already exists");
            return;
        }
        // creating the user in the db
        const user = await User.create({ email, name, password });
        const token = jwt.sign({ id: user._id }, secret, { expiresIn: "7d" });
        res.json({ "message": "user created", "token": token });
        return;
    
    } catch (error) {
        res.status(500).send("something went wrong");
    }
}


export async function handleCategories(req: Request, res: Response): Promise<void>{
    const {brand} = req.params;
    // console.log("inside of the btand function");
    if(!brand){
        res.status(400).send("invalid brand");
        return;
    }
    try{
        const user = PRODUCTS.find((product) => product.brand === brand);
        if(!user){
            res.status(400).send("invalid brand");
            return;
        }
        res.json(user);
        return;
    }catch(error){
        res.status(500).send("something went wrong");
    }
}