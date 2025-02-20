"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const adminSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    permissions: [
        {
            type: String,
            enum: ['manage-products', 'view-orders', 'view-reports', 'manage-users'],
        },
    ],
    lastLogin: {
        type: Date,
        default: Date.now,
    },
});
const Admin = mongoose_1.default.model('Admin', adminSchema);
exports.default = Admin;
