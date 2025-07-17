import express from 'express';
import { getComparedHotels } from '../controllers/hotels.controller';

const router = express.Router();
router.get('/', getComparedHotels);
export default router;
