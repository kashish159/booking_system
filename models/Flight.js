import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    //   unique: true,
    },
    to: {
      type: String,
      required: true,
    },
    departure: {
      type: String,
      required: true,
    },
    flight_no: {
      type: String,
      required: true,
    },
    // photo: {
    //   type: String,
    //   required: false,
    // },
    // desc: {
    //   type: String,
    //   required: true,
    // },
    price: {
      type: Number,
      required: true,
    },
    // maxGroupSize: {
    //   type: Number,
    //   required: true,
    // },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Flight", flightSchema);
