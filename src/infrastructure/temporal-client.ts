import { Connection, Client } from '@temporalio/client';

export const createTemporalClient = async () => {
    const connection = await Connection.connect({
        address: 'temporal:7233',
    });
    return new Client({ connection });
};