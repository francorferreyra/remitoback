import mongoose from 'mongoose';

const remitoSchema = new mongoose.Schema({
    client: {type: String, required: true},
    transport: {type: String, required: true},
    cod: { type: Number, required: true },
     image: {
    url: { type: String },
    public_id: { type: String },
    secure_url: { 
      type: String, 
      default: "https://res.cloudinary.com/deghyfcxf/image/upload/v1739831629/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector_mvx0kj.jpg" 
    }
  }
});

export default mongoose.model('Remito', remitoSchema);
