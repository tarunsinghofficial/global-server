import Lifestyle from '../models/lifestyle-model.js';

export const checkLifestyleEntry = async (req, res, next) => {
    const userId = req.body.userId;

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    
    try {
        const existingEntry = await Lifestyle.findOne({
            userId: userId,
            createdAt: { $gte: new Date(currentYear, currentMonth - 1, 1), $lt: new Date(currentYear, currentMonth, 1) }
        });

        if (existingEntry) {
            return res.status(400).json({ 
                success:false,
                data:{},
                message:"Something Went Wrong",
                error: 'A lifestyle entry already exists for this month.'
             });
        }

        next();
    } catch (error) {
        console.error('Error checking lifestyle entry:', error);
        return res.status(500).json({ error: 'Failed to check lifestyle entry.' });
    }
};

