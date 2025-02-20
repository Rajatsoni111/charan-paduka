"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const shippingSchema = new mongoose_1.default.Schema({
    order: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    shippingMethod: {
        type: String,
        enum: ['standard', 'expedited', 'overnight'],
        required: true,
    },
    trackingNumber: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['shipped', 'in-transit', 'delivered', 'returned'],
        default: 'shipped',
    },
    shippingDate: {
        type: Date,
        default: Date.now,
    },
    estimatedDeliveryDate: {
        type: Date,
    },
});
const Shipping = mongoose_1.default.model('Shipping', shippingSchema);
exports.default = Shipping;
