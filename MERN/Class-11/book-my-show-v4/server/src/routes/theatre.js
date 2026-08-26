import express from 'express';
import Theatre from '../models/Theatre.js';
import { isLoggedIn, isAdminOrPartnerRole } from '../middlewares/user.js';
import { ApiResponse } from '../core/ApiResponse.js';
import Logger from '../core/Logger.js';

const router = express.Router();

router.get('/', isLoggedIn, isAdminOrPartnerRole, async (req, res) => {
    Logger.info(`Request recieved getting theatres for user - ${req.user.userId}`);
    const { userId } = req.user;
    const theatres = await Theatre.find({author: userId});
    res.json(ApiResponse.build('success', 'All theatres', theatres));
});

router.post('/', isLoggedIn, isAdminOrPartnerRole, async (req, res) => {
    Logger.info(`Request recieved to create theatre for user - ${req.user.userId}`);
    const { userId } = req.user;
    const { name, address, contactNo } = req.body;
    const theatre = await Theatre.create({ name, address, contactNo, author: userId });
    res.status(201).json(ApiResponse.build('success', 'Threatre created successfully', theatre));
});

export default router;