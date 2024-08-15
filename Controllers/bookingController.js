import Booking from './../models/Booking.js'

import express from "express";
const bookingRoute = express.Router();

// create new booking
export const createBooking = async(req,res) => {
   const newBooking = new Booking(req.body)

   try {
      const savedBooking = await newBooking.save()

      res.status(200).json({success:true, message:"Your tour is booked!", data:savedBooking})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
}

// get single booking
export const getBooking = async(req,res) => {
   const id = req.params.id
   
   try {
      const book = await Booking.findById(id)

      res.status(200).json({success:true, message:"Successful!", data:book})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   }
} 


// get all booking
export const getAllBooking = async(req,res) => {
   
   try {
      const books = await Booking.find()

      res.status(200).json({success:true, message:"Successful!", data:books})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
} 


export const DeleteBooking = async(req,res) => {
   const id = req.params.id
   
   try {
      const book = await Booking.findByIdAndDelete(id)

      res.status(200).json({success:true, message:"Successful!", data:book})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   }
} 


export const UpdateBooking = async(req,res) => {
   const id = req.params.id;
   const updateParams = req.body;
   
   try {
      const book = await Booking.findByIdAndUpdate(id, updateParams, { new: true })

      if (!book){
         return res.status(404).json({ success: false, message: "Booking not found!" });
      }
      res.status(200).json({success:true, message:"Successful!", data:book})
   } catch (error) {
      res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
   }
} 

// bookingRoute.delete("/delete-booking/:id",(req,res)=>{
//    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
//    (err,data)=>{
//        if(err)
//            return err;
//        else
//            res.json(data);
//    })
// })
