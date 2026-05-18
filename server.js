import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';

dotenv.config();

import userRouter from './routes/UserRoutes.js'
import RemitoRouter from './routes/RemitoRoutes.js'
const app = express();

// Conectar MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = process.env.PORT || 3000;
app.use('/user', userRouter);
app.use('/remito', RemitoRouter);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});