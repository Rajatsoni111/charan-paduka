import express from 'express';
import {loginHandler, signupHandler, handleCategories} from '../controllers/login-signup'
const router = express.Router();

router.post("/login", loginHandler);
router.post("/signup", signupHandler);
// app.patch("/update-profile", handleProfileUpdate);
router.post("/:brand", handleCategories);


export default router;