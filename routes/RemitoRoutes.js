import express from 'express';

import upload from '../middlewares/uploadImage.js';
import remitoCrud from '../controllers/remito/RemitoCrud.js';

const router = express.Router();

router.get('/', remitoCrud.getRemitoAll);

router.post(
  '/',
  upload.single('image'),
  remitoCrud.createRemito
);

export default router;