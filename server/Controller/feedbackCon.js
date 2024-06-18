const Feedback = require('../models/Feedback');

// Submit feedback
exports.submitFeedback = async (req, res) => {
    try {
        const { category, rating, comments } = req.body;
        const feedback = new Feedback({ category, rating, comments });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.GetAllFeedback = async (req, res) => {
    try {
      const feedbacks = await Feedback.find({});
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching feedbacks', error });
    }
  }
// Retrieve aggregated feedback data for all categories or a specific category
exports.getFeedback = async (req, res) => {
    try {
        const { category } = req.query;
        const matchStage = category ? { $match: { category } } : {};
        
        const feedbackData = await Feedback.aggregate([
            matchStage,
            {
                $group: {
                    _id: '$category',
                    averageRating: { $avg: '$rating' },
                    count: { $sum: 1 },
                comments: { $push: '$comments' }}
            }
        ]);
        res.status(200).json(feedbackData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};