"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const paymentSchema = new mongoose_1.default.Schema({
    order: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ['credit-card', 'paypal', 'bank-transfer', 'cash-on-delivery'],
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        required: true,
    },
    transactionId: {
        type: String,
        unique: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentDate: {
        type: Date,
        default: Date.now,
    },
});
const Payment = mongoose_1.default.model('Payment', paymentSchema);
exports.default = Payment;
