import mongoose, { Schema } from "mongoose";

import { eventCategoryValues } from "../lib/event-categories.js";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: null,
    },
    category: {
      type: String,
      enum: eventCategoryValues,
      required: true,
    },
    coverMedia: {
      type: String,
      required: true,
      trim: true,
    },
    media: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    testimonials: {
      type: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
          },
          quote: {
            type: String,
            required: true,
            trim: true,
          },
          role: {
            type: String,
            default: "",
            trim: true,
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

eventSchema.index({ category: 1, featured: 1, date: -1 });

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
