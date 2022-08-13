import express from 'express';
import controller from '../controller/booking.controller';

const router = express.Router();

router.post('/create', controller.CreateBooking);
router.post('/update', controller.UpdateBooking);
router.get('/list', controller.GetBooking);
router.get('/:id', controller.GetBookingById);

export = router;
