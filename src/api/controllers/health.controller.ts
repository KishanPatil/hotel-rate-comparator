import { Request, Response } from 'express';
import axios from 'axios';

export const healthCheck = async (_req: Request, res: Response) => {
    const baseUrl = 'http://localhost:3000'; // Update if deployed behind gateway

    const check = async (url: string) => {
        try {
            const res = await axios.get(url);
            return res.status === 200 ? 'up' : 'down';
        } catch {
            return 'down';
        }
    };

    const [supplierA, supplierB] = await Promise.all([
        check(`${baseUrl}/supplierA/hotels?city=delhi`),
        check(`${baseUrl}/supplierB/hotels?city=delhi`)
    ]);

    return res.status(200).json({
        status: 'ok',
        suppliers: {
            supplierA,
            supplierB
        }
    });
};
