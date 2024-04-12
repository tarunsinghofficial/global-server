import express from 'express';
import { PORT } from './config/server-config.js';
import v1ApiRoutes from './routes/index.js';

const app=express();
app.use(express.json());
app.use('/api',v1ApiRoutes);

app.listen(PORT,async()=>{
    console.log(`Server Started At Port: ${PORT}`);
});

