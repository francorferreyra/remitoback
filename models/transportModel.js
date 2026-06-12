import mongoose from 'mongoose';

const transportSchema = new mongoose.Schema({
    name: {type: String, required: true},
    name_fanstastic: {type: String},
    address: {type: String},
    cod: {type: String}
});

export default mongoose.model('Transport', transportSchema);