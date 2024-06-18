const express = require('express');
const router = express.Router();
const feedbackController = require('../Controller/feedbackCon');

// POST /feedback - Submit feedback
router.post('/feedback', feedbackController.submitFeedback);

router.get('/getFeedback', feedbackController.GetAllFeedback);

// Get aggregated feedback data for a specific category
router.get('/getFeedback/:category', (req, res) => {
    const category = req.params.category;
    feedbackController.getFeedback({ query: { category } }, res);
});

module.exports = router;