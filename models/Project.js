import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
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
    category: {
      type: String,
      enum: ["event", "celebrity", "wedding", "commercial"],
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
      trim: true,
    },
    media: {
      type: [String],
      default: [],
    },
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.index({ category: 1, featured: 1 });

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
