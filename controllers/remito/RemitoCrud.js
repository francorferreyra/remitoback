import streamifier from 'streamifier';

import cloudinary from '../../config/cloudinary.js';
import RemitoModel from '../../models/RemitoModel.js';

const createRemito = async (req, res) => {
  try {

    let imageData = {};

    if (req.file) {

      const result = await new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(
          {
            folder: 'remito_app',
          },
          (error, result) => {

            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);

      });

      imageData = {
        url: result.url,
        secure_url: result.secure_url,
        public_id: result.public_id,
      };
    }

    const remito = new RemitoModel({
      client: req.body.client,
      transport: req.body.transport,
      cod: req.body.cod,
      image: imageData,
    });

    await remito.save();

    res.status(201).json({
      message: 'Remito creado correctamente',
      data: remito,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: 'Error al crear remito',
      error: error.message,
    });
  }
};

export default {
  createRemito,
};