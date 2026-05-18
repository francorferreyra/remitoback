import RemitoModel from '../../models/RemitoModel.js';

const createRemito = async (req, res) => {
  try {
    const remito = new RemitoModel({
      client: req.body.client,
      transport: req.body.transport,
      cod: req.body.cod,


      image: req.file
        ? {
            url: req.file.path,
            secure_url: req.file.path,
            public_id: req.file.filename,
          }
        : undefined,
    });
      console.log(req.file);
return;
    await remito.save();

    res.status(201).json({
      message: 'Remito creado correctamente',
      data: remito,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear remito',
      error: error.message,
    });
  }
};

export default {
  createRemito,
};