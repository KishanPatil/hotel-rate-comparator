// src/services/hotelComparator.service.ts

type Hotel = {
    hotelId: string;
    name: string;
    price: number;
    city: string;
    commissionPct: number;
    supplier?: string;
};

export function deduplicateHotels(supplierA: Hotel[], supplierB: Hotel[]): Hotel[] {
    const resultMap = new Map<string, Hotel>();

    const markSupplier = (hotels: Hotel[], supplierName: string) =>
        hotels.map(h => ({ ...h, supplier: supplierName }));

    const allHotels = [
        ...markSupplier(supplierA, 'Supplier A'),
        ...markSupplier(supplierB, 'Supplier B'),
    ];

    for (const hotel of allHotels) {
        const key = hotel.name.toLowerCase();

        if (!resultMap.has(key) || resultMap.get(key)!.price > hotel.price) {
            resultMap.set(key, hotel);
        }
    }

    return Array.from(resultMap.values());
}
