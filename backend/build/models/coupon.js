"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const couponSchema = new mongoose_1.default.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    discountType: {
        type: String,
        enum: ['percentage', 'fixed'],
        required: true,
    },
    discountValue: {
        type: Number,
        required: true,
    },
    minPurchase: {
        type: Number,
        default: 0,
    },
    expiryDate: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});
const Coupon = mongoose_1.default.model('Coupon', couponSchema);
exports.default = Coupon;
