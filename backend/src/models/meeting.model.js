import { Schema } from "mongoose";
import mongoose from "mongoose";


/* =================== Meeting Schema ========================== */
const meetingSchema = new mongoose.Schema({
  user_id: { type: String },
  meetingCode: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

export  {Meeting}; 
