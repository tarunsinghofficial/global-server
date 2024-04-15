export const calculateCarbonFootprint = (lifestyleData) => {
    let carbonFootprint = 0;

    // Eating Habits
    const eatingHabitFactor = {
        never: 0,
        infrequently: 20,
        occasionally: 40,
        often: 60,
        'very often': 80,
        always: 100
    };
    carbonFootprint += eatingHabitFactor[lifestyleData.eatingHabits];

    // Garbage Generation
    const garbageBucketFactor = {
        small: 5,
        medium: 10,
        large: 20
    };
    carbonFootprint += garbageBucketFactor[lifestyleData.garbageBucketSize] * lifestyleData.numberOfBuckets;

    // Transportation
    const carEmissionFactor = 0.2; // Example emission factor for cars (gCO2/km)
    const bikeEmissionFactor = 0.05; // Example emission factor for bikes (gCO2/km)
    const publicTransportEmissionFactor = 0.1; // Example emission factor for public transport (gCO2/km)

    carbonFootprint += lifestyleData.carDistance * carEmissionFactor;
    carbonFootprint += lifestyleData.bikeDistance * bikeEmissionFactor;
    carbonFootprint += lifestyleData.publicTransportDistance * publicTransportEmissionFactor;

    // Carpooling Frequency
    const carpoolingFactor = {
        never: 0,
        infrequently: 0.2,
        occasionally: 0.4,
        often: 0.6,
        'very often': 0.8,
        always: 1
    };
    carbonFootprint *= carpoolingFactor[lifestyleData.carpoolingFrequency];

    // Multiply by 30 to get monthly carbon footprint (assuming a month has 30 days)
    carbonFootprint *= 30;

    return carbonFootprint;
};