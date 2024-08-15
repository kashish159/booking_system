import Hotel from '../models/Hotel.js'

//Create new hotel
export const createHotel = async (req, res) => {
   const newHotel = new Hotel(req.body)

   try {
      const savedHotel = await newHotel.save()

      res.status(200).json({ success: true, message: 'Successfully created', data: savedHotel })
   } catch (error) {
      res.status(500).json({ success: true, message: 'Failed to create. Try again!' })
   }
}

//Update Hotel
export const updateHotel = async (req, res) => {
   const id = req.params.id

   try {
      const updatedHotel = await Hotel.findByIdAndUpdate(id, {
         $set: req.body
      }, { new: true })

      res.status(200).json({ success: true, message: 'Successfully updated', data: updatedHotel })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to update' })
   }
}

//Delete Hotel
export const deleteHotel = async (req, res) => {
   const id = req.params.id

   try {
      await Hotel.findByIdAndDelete(id)

      res.status(200).json({ success: true, message: 'Successfully deleted' })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete' })
   }
}

//Getsingle Hotel
export const getSingleHotel = async (req, res) => {
   const id = req.params.id

   try {
      const hotel = await Hotel.findById(id).populate('reviews')

      res.status(200).json({ success: true, message: 'Successfully', data: hotel })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get All Hotel
export const getAllHotel = async (req, res) => {
   //For pagination
   const page = parseInt(req.query.page)

   //console.log(page)

   try {
      const hotels = await Hotel.find({}).populate('reviews').skip(page * 8).limit(8)

      res.status(200).json({ success: true, count: hotels.length, message: 'Successfully', data: hotels })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}


// Get hotel by search
export const getHotelBySearch = async (req, res) => {

   // hear 'i' means case sensitive 
   const city = new RegExp(req.query.city, 'i')
   const distance = parseInt(req.query.distance)
   const maxGroupSize = parseInt(req.query.maxGroupSize)

   try {
      // gte means greater than equal
      const hotels = await Hotel.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews')

      res.status(200).json({ success: true, message: 'Successfully', data: hotels })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get featured Hotel
export const getFeaturedHotel = async (req, res) => {
   //console.log(page)

   try {
      const hotels = await Hotel.find({ featured: true }).populate('reviews').limit(8)

      res.status(200).json({ success: true, message: 'Successfully', data: hotels })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get hotel count 
export const getHotelCount = async(req,res) => {
   try {
      const hotelCount = await Hotel.estimatedDocumentCount()

      res.status(200).json({success:true, data:hotelCount})
   } catch (error) {
      res.status(500).json({success:false, message: "Failed to fetch"})
   }
}

export const getFeaturedHotelCount = async(req,res) => {
    try {
       const FeaturedhotelCount = await Hotel.estimatedDocumentCount({ featured: true }).populate('reviews').limit(8)
        console.log(FeaturedhotelCount)
       res.status(200).json({success:true, data: Hotel})
    } catch (error) {
       res.status(500).json({success:false, message: "Failed to fetch"})
    }
 }
