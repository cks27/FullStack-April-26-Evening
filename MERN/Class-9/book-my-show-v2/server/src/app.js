import express from 'express';
import User from './models/User.js';
import bcrypt from 'bcrypt';
import { ApiError, AuthenticationError, BadRequestError, InternalServerError } from './core/ApiError.js';
import { ApiResponse } from './core/ApiResponse.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import Movie from './models/Movie.js';

const app = express()

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET','POST','DELETE','PATCH']
}));

app.get('/echo', (req, res) => {
    res.send('Echo Received!');
});

const JWT_TOKEN = 'weneedabettertoken';

const isLoggedIn = (req, res, next) => {
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

// Signup route
app.post('/register', async (req, res) => {
    const { email, password, role } = req.body;
    // check if user already exist with this email
    const user = await User.findOne({ email });
    if (user) {
        throw new BadRequestError('User with this email already exists');
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = await User.create({ email, passwordHash: hash, role });
    res.json(ApiResponse.build('success', 'User created successfully', { email: newUser.email }));
});

// Login Route
app.post('/login', async(req, res) => {
    const { email, password } = req.body;
    // check if user with the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
        throw new AuthenticationError('Invalid email or password');
    }

    // verify the incoming password
    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordCorrect) {
        throw new AuthenticationError('Invalid email or password');
    }

    // we sign the token
    const token = jwt.sign({ userId: user._id }, JWT_TOKEN, { expiresIn: '2d' });
    res.json(ApiResponse.build('success', 'Logged In Successfully', { token: token }));
});

app.get('/profile', isLoggedIn, async(req, res) => {
    const { userId } = req;
    const user = await User.findById(userId).select('-passwordHash');
    res.json(ApiResponse.build('success', 'User profile', user));
});

app.get('/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.json(ApiResponse.build('success', 'All Movie', movies));
});

// Global Error Handler
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        const { message = 'Something went wrong!', status = 500 } = err;
        return res.status(status).json(ApiResponse.build('failed', message))
    }
    return res.status(500).json(ApiResponse.build('failed', 'Best minds working on it!'));
});

export default app;