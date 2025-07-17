import axios from 'axios';

export async function fetchSupplierA(city: string) {
    try {
        const response = await axios.get(`http://localhost:3000/supplierA/hotels?city=${city}`);
        return response.data;
    } catch (err) {
        console.error('Supplier A failed', err);
        throw new Error('Supplier A unavailable');
    }
}
