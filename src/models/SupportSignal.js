const mongoose = require('mongoose');
const supportSignalSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      required: true,
      index: true,
    },
    domain:{
      type: String,
      enum:[
        "ACADEMIC",
        "FINANCIAL",
        "WELLBEING",
      ],
      required: true,
    },
    severity:{
      type: String,
      enum:[
        "LOW",
        "MEDIUM",
        "HIGH",
      ],
      required: true,

    },
    status:{
      type: String,
      enum:[
        "NEW",
        "UNDER_REVIEW",
        "REVIEWED",
        "DISMISSED",
      ],
      default: "NEW",
    },
    signalScore:{
      type: Number,
      min: 0,
      max: 100,
      default: null,
    },
    detectedAt:{
      type: Date,
      default: Date.now,
    },
    },
    {
      timestamps: true,
    }
  );
  module.exports = mongoose.model("SupportSignal", supportSignalSchema);