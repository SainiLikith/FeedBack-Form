const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();


// Middleware
const FRILL_API_ENDPOINT = 'https://api.frill.co/v1/feedback';
const FRILL_API_KEY = 'your_api_key_here';

// Function to send feedback to Frill.co
async function sendFeedbackToFrill(userId, feedbackText) {
    try {
        const response = await axios.post(FRILL_API_ENDPOINT, {
            user_id: userId,
            feedback: feedbackText
        }, {
            headers: {
                'Authorization': `Bearer ${FRILL_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 201) {
            console.log('Feedback submitted successfully');
        } else {
            console.error(`Unexpected response: ${response.status} - ${response.data}`);
        }
    } catch (error) {
        console.error(`Error submitting feedback: ${error.message}`);
    }
}

// Endpoint to handle feedback submission
app.post('/submit-feedback', async (req, res) => {
    const { userId, feedbackText } = req.body;

    if (!userId || !feedbackText) {
        return res.status(400).send('User ID and feedback text are required');
    }

    await sendFeedbackToFrill(userId, feedbackText);
    res.send('Feedback submitted');
});