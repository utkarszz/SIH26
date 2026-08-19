const mongoose = require('mongoose');
const signalReasonSchema = new mongoose.Schema(
  {
    signalId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"SupportSignal",
      required:true,
      index:true,

    },
    factor:{
      type:String,
      required:true,
    },
    previousvalue:{
      type:Number,
      default:null,
    },
    currentValue:{
      type:Number,
      default:null,
    },
    change:{
      type:Number,
      default:null,
    },
    explanation:{
      type:String,
      required:true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("SignalReason", signalReasonSchema);

    
    