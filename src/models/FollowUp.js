

const mongoose = require("mongoose");

const followUpSchema = new mongoose.Schema(
  {
    caseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SupportCase",
      required: true,
      index: true,
    },

    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    scheduledFor: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "SCHEDULED",
        "COMPLETED",
        "MISSED",
        "CANCELLED",
      ],
      default: "SCHEDULED",
    },

    notes: {
      type: String,
      default: "",
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FollowUp", followUpSchema);