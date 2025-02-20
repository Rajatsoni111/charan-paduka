import {Request, Response} from 'express';

export async function homeScreen(req: Request, res: Response):Promise<void>{
    res.json({"message": "Hello ji"});
}

export async function anotherScreen(req:Request, res:Response){
    res.json({"message": "this is another screen"});
}