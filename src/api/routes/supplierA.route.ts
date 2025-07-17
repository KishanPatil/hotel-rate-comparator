import express from 'express';
import { getSupplierAHotels } from '../controllers/supplierA.controller';

const router = express.Router();
router.get('/', getSupplierAHotels);
export default router;
