"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = __importDefault(require("./routes/authentication"));
const connection_js_1 = __importDefault(require("./connection.js"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 8000;
(0, connection_js_1.default)();
app.use(express_1.default.json());
app.use("/", authentication_1.default);
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
