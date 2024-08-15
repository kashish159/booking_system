import mongoose from "mongoose";

const booking1Schema = new mongoose.Schema(
   {
      userId: {
         type: String
      },
      userEmail: {
         type: String
      },
      hotelName: {
         type: String,
         required: true,
      },
      hotelId: {
         type: String,
         required: true,
      },
      fullName: {
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
         required: true,
      set: function (value) {
        // Set the time part of the timestamp to 00:00:00
        return new Date(value).setUTCHours(0, 0, 0, 0);
      },
    },
  },
  { timestamps: true }
);



export default mongoose.model("Booking1", booking1Schema);
