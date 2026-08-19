const mongoose = require('mongoose');
const assignmentSchema = new mongoose.Schema(
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
    assignmentId:{
      type: String,
      required: true,
    },
    status:{
      type:String,
      enum:["SUBMITTED","LATE","MISSING"],
      required: true,
    },
    submissionDate:{
      type: Date,
      default: null,
    },
    deadline:{
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Assignment", assignmentSchema);