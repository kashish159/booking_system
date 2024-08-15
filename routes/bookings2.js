import express from 'express'
import { createBooking, getAllBooking, getBooking ,UpdateBooking, DeleteBooking} from '../Controllers/booking2Controller.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createBooking)
router.get('/:id', verifyUser, getBooking)
router.get('/', verifyAdmin, getAllBooking)
router.put('/:id', verifyUser, UpdateBooking)
router.delete('/:id', verifyUser, DeleteBooking)

export default router
