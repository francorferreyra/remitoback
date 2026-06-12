import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    name_fantastic: {tipye: String},
    address: {type: String},
    cod: {type: String}
});

export default mongoose.model('Client', clientSchema);
