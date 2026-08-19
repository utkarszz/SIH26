

const mongoose = require("mongoose");

const correctionRequestSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentProfile",
      required: true,
      index: true,
    },

    dataCategory: {
      type: String,
      enum: [
        "PROFILE",
        "ATTENDANCE",
        "ACADEMIC",
        "ASSIGNMENTS",
        "ENGAGEMENT",
      ],
      required: true,
    },

    recordId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    fieldName: {
      type: String,
      required: true,
    },

    currentValue: {
      type: String,
      required: true,
    },

    requestedValue: {
      type: String,
      required: true,
    },

    reason: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "PENDING",
        "APPROVED",
        "REJECTED",
      ],
      default: "PENDING",
    },

    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    reviewedAt: {
      type: Date,
      default: null,
    },

    reviewComment: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CorrectionRequest",
  correctionRequestSchema
);