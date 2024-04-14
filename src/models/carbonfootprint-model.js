import mongoose from 'mongoose';

// Define schema for the CarbonFootprint model
const carbonFootprintSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    carbonFootprint: {
        type: Number,
        required: true
    }
},{timestamps:true});

// Create CarbonFootprint model
const CarbonFootprint = mongoose.model('CarbonFootprint', carbonFootprintSchema);

export default CarbonFootprint;