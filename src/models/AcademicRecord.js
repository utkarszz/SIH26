const mongoose = require('mongoose');
const academicRecordSchema = new mongoose.Schema(
  {
    studentId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StudentProfile',
      required: true,
      index: true,
    },
    courseId:{
      type:String,
      required: true,
    },
    assessment:{
      type: String,
      required: true,
    },
    score:{
      type: Number,
      required: true,
      min: 0,
    },
    maxScore:{
      type: Number,
      required: true,
      min:1,
    },
    date:{
      type: Date,
      required: true, 
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("AcademicRecord", academicRecordSchema);
  