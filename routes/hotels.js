import express from 'express'
import { createHotel, deleteHotel, getAllHotel, getFeaturedHotel,getFeaturedHotelCount , getSingleHotel, getHotelBySearch, getHotelCount, updateHotel } from '../Controllers/hotelControllers.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create new hotel 
router.post('/', verifyAdmin, createHotel)

//Update hotel 
router.put('/:id', verifyAdmin, updateHotel)

//Delete hotel 
router.delete('/:id', verifyAdmin, deleteHotel)

//Get single hotel 
router.get('/:id', getSingleHotel)

//Get all hotel 
router.get('/', getAllHotel)

//Get hotel by search
router.get("/search/getHotelBySearch", getHotelBySearch)
router.get("/search/getFeaturedHotel", getFeaturedHotel)
router.get("/search/getHotelCount", getHotelCount)
router.get("/search/getFeaturedHotelCount", getFeaturedHotelCount)




export default router