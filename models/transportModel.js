import mongoose from 'mongoose';

const transportSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String}
    
});

export default mongoose.model('Transport', transportSchema);