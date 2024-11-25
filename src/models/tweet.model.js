import mongoose, { Schema } from "mongoose";

const tweenSchema = new Schema(
  {
    content: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweenSchema);
