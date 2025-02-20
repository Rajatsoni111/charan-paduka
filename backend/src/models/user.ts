import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface User extends Document {
  name: string;
  email: string;
  password: string;
  phone?: string;
  shippingAddresses: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }[];
  orderHistory: Schema.Types.ObjectId[];
  role: 'customer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    shippingAddresses: [
      {
        addressLine1: { type: String, required: true },
        addressLine2: String,
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
      },
    ],
    orderHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
    role: {
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer',
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

const User = model<User>('User', userSchema);

export default User;
