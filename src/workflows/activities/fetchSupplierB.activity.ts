import axios from 'axios';

export async function fetchSupplierB(city: string) {
    try {
        const response = await axios.get(`http://localhost:3000/supplierB/hotels?city=${city}`);
        return response.data;
    } catch (err) {
        console.error('Supplier B failed', err);
        throw new Error('Supplier B unavailable');
    }
}
