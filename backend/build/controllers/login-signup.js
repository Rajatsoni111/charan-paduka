"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHandler = void 0;
exports.signupHandler = signupHandler;
exports.handleCategories = handleCategories;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const products_1 = require("../data/products");
// import productSchema from '../models/product';
// import Users from '../types/users';
// import 'dotenv/config'
const secret = process.env.JWT_SECRET || "lolopoposhosho";
// const expiresIn = process.env.JWT_EXPIRE || '1d'; // '1d' is the default if JWT_EXPIRE is not set
// logging the user in
const loginHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(404).send("invalid credentials");
        return;
    }
    try {
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            res.status(400).send("invalid credentials");
            return;
        }
        if (yield user.matchPassword(password)) {
            const token = jsonwebtoken_1.default.sign({ id: user._id }, secret, { expiresIn: "7d" });
            res.json({ "message": "you have been loggen in", "token": token });
            return;
        }
        else {
            res.status(400).send("invalid credentials");
            return;
        }
    }
    catch (error) {
        res.status(500).send("something went wrong");
        return;
    }
});
exports.loginHandler = loginHandler;
// signing the user up
function signupHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, name, password } = req.body;
        if (!email || !name || !password) {
            res.status(400).send("invalid credentials");
            return;
        }
        try {
            // checking if the user already exists
            const check = yield user_1.default.findOne({ email });
            if (check) {
                res.status(400).send("user already exists");
                return;
            }
            // creating the user in the db
            const user = yield user_1.default.create({ email, name, password });
            const token = jsonwebtoken_1.default.sign({ id: user._id }, secret, { expiresIn: "7d" });
            res.json({ "message": "user created", "token": token });
            return;
        }
        catch (error) {
            res.status(500).send("something went wrong");
        }
    });
}
function handleCategories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { brand } = req.params;
        // console.log("inside of the btand function");
        if (!brand) {
            res.status(400).send("invalid brand");
            return;
        }
        try {
            const user = products_1.PRODUCTS.find((product) => product.brand === brand);
            if (!user) {
                res.status(400).send("invalid brand");
                return;
            }
            res.json(user);
            return;
        }
        catch (error) {
            res.status(500).send("something went wrong");
        }
    });
}
