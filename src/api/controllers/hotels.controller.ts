import { Request, Response } from 'express';
import { Client, Connection } from '@temporalio/client';

export const getComparedHotels = async (req: Request, res: Response) => {
    const city = req.query.city?.toString().toLowerCase();
    if (!city) return res.status(400).json({ error: 'city query param is required' });

    try {
        const connection = await Connection.connect(); // connect to Temporal server
        const client = new Client({ connection });

        const result = await client.workflow.execute('hotelComparisonWorkflow', {
            args: [city],
            taskQueue: 'HOTEL_TASK_QUEUE',
            workflowId: `compare-hotels-${city}-${Date.now()}`,
        });

        res.status(200).json(result);
    } catch (err: any) {
        console.error('Workflow execution error:', err);
        res.status(500).json({ error: err.message || 'Workflow failed' });
    }
};
