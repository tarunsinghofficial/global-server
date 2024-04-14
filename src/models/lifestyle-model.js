import mongoose from 'mongoose';
import CarbonFootprint from './carbonfootprint-model.js';
import {calculateCarbonFootprint} from "../utils/carbon-footprint-calculator.js";
const lifestyleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    eatingHabits: {
        type: String,
        enum: ['never', 'infrequently', 'occasionally', 'often', 'very often', 'always'],
        required: true
    },
    garbageBucketSize: {
        type: String,
        enum: ['small', 'medium', 'large'],
        required: true
    },
    numberOfBuckets: {
        type: Number,
        min: 1,
        required: true
    },
    carDistance: {
        type: Number, 
        min: 0,
        required: true
    },
    bikeDistance: {
        type: Number, 
        min: 0,
        required: true
    },
    carpoolingFrequency: {
        type: String,
        enum: ['never', 'infrequently', 'occasionally', 'often', 'very often', 'always'],
        required: true
    },
    publicTransportDistance: {
        type: Number, 
        min: 0,
        required: true
    },

},{timestamps:true});

lifestyleSchema.post('save', async function() {
    const lifestyleData = this;

    try {
        // Calculate carbon footprint
        const carbonFootprintValue = calculateCarbonFootprint(lifestyleData);

        // Check if a carbon footprint entry already exists for the user
        const existingCarbonFootprint = await CarbonFootprint.findOne({ userId: lifestyleData.userId });

        if (existingCarbonFootprint) {
            // Update existing carbon footprint entry
            existingCarbonFootprint.carbonFootprint = carbonFootprintValue;
            await existingCarbonFootprint.save();
            console.log('Carbon footprint updated successfully');
        } else {
            // Create new carbon footprint entry
            const carbonFootprintEntry = new CarbonFootprint({
                userId: lifestyleData.userId,
                carbonFootprint: carbonFootprintValue
            });
            await carbonFootprintEntry.save();
            console.log('Carbon footprint saved successfully');
        }
    } catch (error) {
        console.error('Error calculating and saving carbon footprint:', error);
    }
});

const Lifestyle = mongoose.model('Lifestyle', lifestyleSchema);

export default Lifestyle;