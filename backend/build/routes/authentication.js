"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_signup_1 = require("../controllers/login-signup");
const router = express_1.default.Router();
router.post("/login", login_signup_1.loginHandler);
router.post("/signup", login_signup_1.signupHandler);
// app.patch("/update-profile", handleProfileUpdate);
router.post("/:brand", login_signup_1.handleCategories);
exports.default = router;
