import express from 'express'
import { createBooking, getAllBooking, getBooking, UpdateBooking ,DeleteBooking } from '../Controllers/bookingController.js'
import { verifyAdmin, verifyUser,verifyToken } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser,verifyToken, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBooking)
router.put('/:id', verifyUser, UpdateBooking)
router.delete('/:id', verifyUser, DeleteBooking)


export default router
