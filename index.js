import express  from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'
import hotelRoute from './routes/hotels.js'
import booking1Route from './routes/bookings1.js'
import flightRoute from './routes/flights.js'
import booking2Route from './routes/bookings2.js'
import { verifyAdmin, verifyUser, verifyToken } from './utils/verifyToken.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 4000
const corsOptions = {
   origin: true,
   credentials: true
}

mongoose.set("strictQuery", false)
const connect = async() => {
   try {
      await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })

      console.log('MongoDB connected')
   } catch (error) {
      console.log('MongoDB connection failed')
   }
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/tours", tourRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/review", reviewRoute)
app.use("/api/v1/booking",verifyToken, bookingRoute)
app.use("/api/v1/hotels", hotelRoute)
app.use("/api/v1/booking1", booking1Route)
app.use("/api/v1/flights", flightRoute)
app.use("/api/v1/booking2", booking2Route)
app.listen(port, () => {
   connect()
   console.log('server listening on port',port)
})
