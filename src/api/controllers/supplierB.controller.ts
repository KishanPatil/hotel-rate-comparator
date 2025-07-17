import { Request, Response } from 'express';

const supplierHotels = [
    { hotelId: 'b1', name: 'Holtin', price: 5000, city: 'delhi', commissionPct: 10 },
    { hotelId: 'b2', name: 'Burlean', price: 6700, city: 'delhi', commissionPct: 13 },
    { hotelId: 'b3', name: 'Tiptop', price: 3200, city: 'mumbai', commissionPct: 12 },
];

export const getSupplierBHotels = (req: Request, res: Response) => {
    const city = req.query.city?.toString().toLowerCase();
    if (!city) return res.status(400).json({ error: 'city query param required' });

    const filtered = supplierHotels.filter(hotel => hotel.city.toLowerCase() === city);
    res.json(filtered);
};
