import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [8, "Must be 8 characters"],
      max: 20,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
