import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
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

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
