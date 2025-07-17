import { Request, Response } from 'express';

const supplierHotels = [
    { hotelId: 'a1', name: 'Holtin', price: 6000, city: 'delhi', commissionPct: 10 },
    { hotelId: 'a2', name: 'Radison', price: 6500, city: 'delhi', commissionPct: 13 },
    { hotelId: 'a3', name: 'Oberoi', price: 7200, city: 'mumbai', commissionPct: 12 },
];

export const getSupplierAHotels = (req: Request, res: Response) => {
    const city = req.query.city?.toString().toLowerCase();
    console.log('Supplier A hotels requested for city:', city);
    if (!city) return res.status(400).json({ error: 'city query param required' });

    const filtered = supplierHotels.filter(hotel => hotel.city.toLowerCase() === city);
    res.json(filtered);
};
