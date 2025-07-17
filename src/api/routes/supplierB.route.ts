import express from 'express';
import { getSupplierBHotels } from '../controllers/supplierB.controller';

const router = express.Router();
router.get('/', getSupplierBHotels);
export default router;
