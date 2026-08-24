import express from 'express';
import { findAll, findOne } from '../controller/movie.js';
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findOne);

export default router;
