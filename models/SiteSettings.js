import mongoose, { Schema } from "mongoose";

const siteSettingsSchema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      default: "site",
    },
    heroVideoUrl: {
      type: String,
      default: "",
      trim: true,
    },
    heroPosterUrl: {
      type: String,
      default: "",
      trim: true,
    },
    heroEyebrow: {
      type: String,
      default: "Celebration & Function Organisation",
      trim: true,
    },
    heroTitle: {
      type: String,
      default: "Elegant celebrations, designed with care.",
      trim: true,
    },
    heroDescription: {
      type: String,
      default:
        "RBK Events plans ceremonies, receptions, engagements, haldi-mehendi functions, birthday parties, naming ceremonies, anniversaries, private celebrations, and corporate events with decor, coordination, and photo/video coverage.",
      trim: true,
    },
    media: {
      type: Map,
      of: String,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const SiteSettings =
  mongoose.models.SiteSettings || mongoose.model("SiteSettings", siteSettingsSchema);

export default SiteSettings;
