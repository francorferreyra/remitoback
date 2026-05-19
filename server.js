import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';

import userRouter from './routes/UserRoutes.js';
import RemitoRouter from './routes/RemitoRoutes.js';

const app = express();

// Conectar MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Rutas
app.use('/user', userRouter);
app.use('/remito', RemitoRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});