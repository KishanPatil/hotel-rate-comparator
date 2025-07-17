import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';
import { deduplicateHotels } from '../services/hotelComparator.service';

// Configure activity timeouts
const { fetchSupplierA, fetchSupplierB } = proxyActivities<typeof activities>({
    startToCloseTimeout: '10 seconds',
});

export async function hotelComparisonWorkflow(city: string) {
    // Call both suppliers in parallel
    const [supplierAData, supplierBData] = await Promise.all([
        fetchSupplierA(city),
        fetchSupplierB(city),
    ]);

    // Merge and deduplicate based on lowest price
    const finalResult = deduplicateHotels(supplierAData, supplierBData);

    return finalResult;
}
