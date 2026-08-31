import express from 'express';
import { isLoggedIn } from '../middlewares/user.js';
import Screening from '../models/Screenings.js';
import { ApiResponse } from '../core/ApiResponse.js';
import { BadRequestError, NotFoundError } from '../core/ApiError.js';
import Booking from '../models/Booking.js';

const router = express.Router();

router.post('/', isLoggedIn, async(req, res) => {
    const { userId } = req.user;
    const { theatre, movie, seats, showTime, amount } = req.body;
    const screening = await Screening.findOne({ theatre, movie, showTimings: { $in: [showTime] } });
    if (!screening) {
        throw new NotFoundError('Something went wrong please. Try booking again');
    }
    
    // Amount check
    if (amount !== screening.price * seats.length) {
        throw new BadRequestError('Invalid Amount');
    }

    // check if seats are already bookied for this movie and theatre
    const isBookingExists = await Booking.exists({
        theatre,
        movie,
        seats: { $in: [...seats] }
    });

    if (isBookingExists) {
        throw new BadRequestError('Some of the seats are already booked');
    }


    const booking = await Booking.create({
        theatre,
        movie,
        user: userId,
        showTime,
        amount,
        seats
    });

    res.json(ApiResponse.build('success', 'created a pending booking', booking));
})

export default router;