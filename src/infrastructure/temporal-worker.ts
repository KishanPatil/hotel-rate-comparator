import { Worker } from '@temporalio/worker';
import * as activities from '../../src/workflows/activities';
import { hotelComparisonWorkflow as hotelSearchWorkflow } from '../../src/workflows/hotelComparison.workflow';

export async function runWorker() {
    const worker = await Worker.create({
        workflowsPath: require.resolve('../../src/workflows/hotelComparison.workflow'),
        activities,
        taskQueue: 'HOTEL_TASK_QUEUE',
    });

    await worker.run();
}
