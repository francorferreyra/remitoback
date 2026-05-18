import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String}
    
});

export default mongoose.model('Client', clientSchema);
