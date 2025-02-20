import mongoose from 'mongoose'

const shippingSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
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

const Shipping = mongoose.model('Shipping', shippingSchema);

export default Shipping;
