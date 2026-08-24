import jwt from 'jsonwebtoken';
import { ApiResponse } from '../core/ApiResponse.js';
import { InternalServerError } from '../core/ApiError.js';

const JWT_TOKEN = 'weneedabettertoken';

export const isLoggedIn = (req, res, next) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', "");
        const {userId} = jwt.verify(token, JWT_TOKEN);
        req.userId = userId;
        return next();
    }
    catch (err) {
        if (err.name === 'JsonWebTokenError') {
            return res.json(ApiResponse.build('failed', 'Please login again to continue'))
        }
        next(new InternalServerError('Something went wrong while validating token'));
    }
}