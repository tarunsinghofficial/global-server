import mongoose from 'mongoose';

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

const Lifestyle = mongoose.model('Lifestyle', lifestyleSchema);

export default Lifestyle;