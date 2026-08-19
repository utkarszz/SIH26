const mongoose = require('mongoose');
const engagementSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      required: true,
      index: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    engagementScore: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    periodStart: {
      type: Date,
      required: true,
    },
    periodEnd: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Engagement", engagementSchema);

