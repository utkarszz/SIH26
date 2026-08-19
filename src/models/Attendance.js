const mongoose = require('mongoose');
const attendanceSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      required: true,
      index: true,
    },
    courseId: {
      type:String,
      required: true,
    },
    date:{
      type: Date,
      required: true,
    },
    percentage:{
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    source:{
      type: String,
      default:"INSTITUTION",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Attendance", attendanceSchema);