import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requiresd: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      requiresd: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      requiresd: true,
      min: 6,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requiresd: true,
    },
    desc: {
      type: String,
      requiresd: true,
    },

    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model.User || mongoose.model("User", userSchema);
export const Post = mongoose.model.Post || mongoose.model("Post", postSchema);
