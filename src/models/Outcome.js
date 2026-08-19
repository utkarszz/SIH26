

const mongoose = require("mongoose");

const outcomeSchema = new mongoose.Schema(
  {
    caseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SupportCase",
      required: true,
      unique: true,
    },

    recordedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "RESOLVED",
        "ONGOING",
        "REFERRED",
        "NO_RESPONSE",
        "DECLINED_SUPPORT",
      ],
      required: true,
    },

    studentFeedback: {
      type: String,
      enum: [
        "HELPFUL",
        "SOMEWHAT_HELPFUL",
        "NOT_HELPFUL",
        "NO_RESPONSE",
        "NOT_PROVIDED",
      ],
      default: "NOT_PROVIDED",
    },

    notes: {
      type: String,
      default: "",
    },

    recordedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Outcome", outcomeSchema);