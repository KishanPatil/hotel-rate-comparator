import { Worker } from '@temporalio/worker';
import * as activities from './workflows/activities';

async function runWorker() {
    const worker = await Worker.create({
        workflowsPath: require.resolve('./workflows/hotelComparison.workflow'),
        activities,
        taskQueue: 'HOTEL_TASK_QUEUE',
    });

    await worker.run();
}

runWorker().catch(err => {
    console.error('Worker failed:', err);
    process.exit(1);
});
