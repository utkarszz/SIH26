const mongoose = require('mongoose');
const consentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      required: true,
      index: true,
    },
    dataCategory: {
      type: String,
      enum:[
        "ATTENDANCE",
        "ACADEMIC",
        "ASSIGNMENTS",
        "ENGAGEMENT",
        "SELF_REPORTED_SUPPORT",
      ],
      required: true,
    },
    purpose:{
      type: String,
      required: true,
    },
    granted:{
      type: Boolean,
      default: false,

    },
    grantedAt:{
      type: Date,
      default: null,
    },
    revokedAt:{
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
consentSchema.index({ studentId: 1, dataCategory: 1 }, { unique: true });
module.exports = mongoose.model("Consent", consentSchema);

    