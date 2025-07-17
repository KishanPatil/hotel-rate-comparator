import express from 'express';
import supplierARoute from '../api/routes/supplierA.route';
import supplierBRoute from '../api/routes/supplierB.route';
import hotelsRoute from '../api/routes/hotels.route';
import healthRoute from '../api/routes/health.route';


const app = express();
app.use(express.json());

app.use('/supplierA/hotels', supplierARoute);
app.use('/supplierB/hotels', supplierBRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/health', healthRoute);

export default app;
