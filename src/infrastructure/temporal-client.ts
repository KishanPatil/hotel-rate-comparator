import { Connection, Client } from '@temporalio/client';

export const createTemporalClient = async () => {
    const connection = await Connection.connect();
    return new Client({ connection });
};
