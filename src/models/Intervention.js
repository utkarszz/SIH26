

const mongoose = require("mongoose");

const interventionSchema = new mongoose.Schema(
  {
    caseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SupportCase",
      required: true,
      index: true,
    },

    resourceName: {
      type: String,
      required: true,
      trim: true,
    },

    resourceType: {
      type: String,
      enum: [
        "ACADEMIC",
        "FINANCIAL",
        "WELLBEING",
        "PEER_SUPPORT",
        "MENTORING",
        "OTHER",
      ],
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    offeredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "OFFERED",
        "ACCEPTED",
        "DECLINED",
        "POSTPONED",
        "IN_PROGRESS",
        "COMPLETED",
      ],
      default: "OFFERED",
    },

    offeredAt: {
      type: Date,
      default: Date.now,
    },

    startedAt: {
      type: Date,
      default: null,
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

module.exports = mongoose.model("Intervention", interventionSchema);