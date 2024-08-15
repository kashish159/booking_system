import Flight from '../models/Flight.js'

//Create new flight
export const createFlight = async (req, res) => {
   const newFlight = new Flight(req.body)

   try {
      const savedFlight = await newFlight.save()

      res.status(200).json({ success: true, message: 'Successfully created', data: savedFlight })
   } catch (error) {
      res.status(500).json({ success: true, message: 'Failed to create. Try again!' })
   }
}

//Update Flight
export const updateFlight = async (req, res) => {
   const id = req.params.id

   try {
      const updatedFlight = await Flight.findByIdAndUpdate(id, {
         $set: req.body
      }, { new: true })

      res.status(200).json({ success: true, message: 'Successfully updated', data: updatedFlight })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to update' })
   }
}

//Delete Flight
export const deleteFlight = async (req, res) => {
   const id = req.params.id

   try {
      await Flight.findByIdAndDelete(id)

      res.status(200).json({ success: true, message: 'Successfully deleted' })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete' })
   }
}

//Getsingle Flight
export const getSingleFlight = async (req, res) => {
   const id = req.params.id

   try {
      const flight = await Flight.findById(id).populate('reviews')

      res.status(200).json({ success: true, message: 'Successfully', data: flight })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get All Flight
export const getAllFlight = async (req, res) => {
   //For pagination
   const page = parseInt(req.query.page)

   //console.log(page)

   try {
      const flights = await Flight.find({}).populate('reviews').skip(page * 8).limit(8)

      res.status(200).json({ success: true, count: flights.length, message: 'Successfully', data: flights })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}


// Get flight by search
export const getFlightBySearch = async (req, res) => {

   // hear 'i' means case sensitive 
   const from = new RegExp(req.query.from, 'i')
   const to = new RegExp(req.query.to, 'i')
   // const distance = parseInt(req.query.distance)
   // const maxGroupSize = parseInt(req.query.maxGroupSize)

   try {
      // gte means greater than equal
      // const flights = await Flight.find({ from ,to , distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews')
      const flights = await Flight.find({ from ,to }).populate('reviews')

      res.status(200).json({ success: true, message: 'Successfully', data: flights })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get featured Flight
export const getFeaturedFlight = async (req, res) => {
   //console.log(page)

   try {
      const flights = await Flight.find({ featured: true }).populate('reviews').limit(8)

      res.status(200).json({ success: true, message: 'Successfully', data: flights })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get flight count 
export const getFlightCount = async(req,res) => {
   try {
      const flightCount = await Flight.estimatedDocumentCount()

      res.status(200).json({success:true, data:flightCount})
   } catch (error) {
      res.status(500).json({success:false, message: "Failed to fetch"})
   }
}

export const getFeaturedFlightCount = async(req,res) => {
    try {
       const FeaturedflightCount = await Flight.estimatedDocumentCount({ featured: true }).populate('reviews').limit(8)
        console.log(FeaturedflightCount)
       res.status(200).json({success:true, data: Flight})
    } catch (error) {
       res.status(500).json({success:false, message: "Failed to fetch"})
    }
 }
