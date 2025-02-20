import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
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

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
