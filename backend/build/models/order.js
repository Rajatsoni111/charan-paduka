"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    shippingAddress: {
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending',
    },
    shippingStatus: {
        type: String,
        enum: ['not-shipped', 'shipped', 'delivered'],
        default: 'not-shipped',
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    deliveryDate: {
        type: Date,
    },
});
const Order = mongoose_1.default.model('Order', orderSchema);
exports.default = Order;
