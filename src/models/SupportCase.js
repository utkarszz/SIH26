const mongoose = require('mongoose');
const supportCaseSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      required: true,
      index: true,
    },
    signalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SupportSignal",
      default: null,
    },
    mentorId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    domain:{
      type: String,
      enum:[
        "ACADEMIC",
        "FINANCIAL",
        "WELLBEING"
      ],
      required: true,
    },
    status:{
      type: String,
      enum:[
        "DETECTED",
        "UNDER_REVIEW",
        "CONTACTED",
        "ACCEPTED",
        "POSTPONED",
        "DECLINED",
        "IN_PROGRESS",
        "FOLLOW_UP",
        "RESOLVED",
        "REFERRED",
      ],
      default: "DETECTED",
    },
    source:{
      type: String,
      enum:[
        "SYSTEM_SIGNAL",
        "STUDENT_REQUEST",
      ], 
      required: true,
    },
    },
    {
      timestamps: true,

    }
  );
  module.exports = mongoose.model("SupportCase", supportCaseSchema);