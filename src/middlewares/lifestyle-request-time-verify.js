import Lifestyle from '../models/lifestyle-model.js';

export const checkLifestyleEntry = async (req, res, next) => {
    const userId = req.body.userId;

    try {
        const lifestyle = await Lifestyle.findOne({ 
            userId:userId 
        });
        if(lifestyle) {
            const existingEntry = await Lifestyle.findOne({
                userId: userId,
                createdAt: { $gte: new Date(lifestyle.createdAt), $lt: new Date(lifestyle.createdAt.getTime() + (30 * 24 * 60 * 60 * 1000)) }
            });
            if (existingEntry) {
                return res.status(400).json({ 
                    success:false,
                    data:{},
                    message:"Something Went Wrong",
                    error: 'A lifestyle entry already exists for this month.'
                 });
            }
        }

        next();
    } catch (error) {
        console.error('Error checking lifestyle entry:', error);
        return res.status(500).json({ error: 'Failed to check lifestyle entry.' });
    }
};

