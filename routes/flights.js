import express from 'express'
import { createFlight, deleteFlight, getAllFlight, getFeaturedFlight,getFeaturedFlightCount , getSingleFlight, getFlightBySearch, getFlightCount, updateFlight } from '../Controllers/flightControllers.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create new flight 
router.post('/', verifyAdmin, createFlight)

//Update flight 
router.put('/:id', verifyAdmin, updateFlight)

//Delete flight 
router.delete('/:id', verifyAdmin, deleteFlight)

//Get single flight 
router.get('/:id', getSingleFlight)

//Get all flight 
router.get('/', getAllFlight)

//Get flight by search
router.get("/search/getFlightBySearch", getFlightBySearch)
router.get("/search/getFeaturedFlight", getFeaturedFlight)
router.get("/search/getFlightCount", getFlightCount)
router.get("/search/getFeaturedFlightCount", getFeaturedFlightCount)




export default router