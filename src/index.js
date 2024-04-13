import express from 'express';
import { PORT } from './config/server-config.js';
import {connect} from './config/database-config.js';
import ApiRoutes from './routes/index.js';

const app=express();
app.use(express.json());
app.use('/api',ApiRoutes);

app.listen(PORT,async()=>{
    console.log(`Server Started At Port: ${PORT}`);
    await connect();
    console.log('Done');
});

