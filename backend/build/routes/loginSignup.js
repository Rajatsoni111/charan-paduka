"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_signup_1 = require("../controllers/login-signup");
const app = (0, express_1.default)();
app.get("/login", login_signup_1.loginHandler);
app.get("/signup", login_signup_1.signupHandler);
