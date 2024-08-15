import mongoose from "mongoose";

const booking2Schema = new mongoose.Schema(
   {
      userId: {
         type: String
      },
      userEmail: {
         type: String
      },
      fullName: {
         type: String
      },
      flightName: {
         type: String,
         required: true
      },
      flightId: {
         type: String,
         required: true
      },
      flight_no: {
         type: String,
         required: true
      },
      from: {
         type: String,
         required: true,
      },
      to: {
         type: String,
         required: true,
      },
      departure: {
         type: String,
         required: true,
      },
      guestSize: {
         type: Number,
         required: true
      },
      phone: {
         type: Number,
         required: true
      },
      bookAt: {
         type: Date,
         required: true
      },
   },
   { timestamps: true }
);

export default mongoose.model("Booking2", booking2Schema);
