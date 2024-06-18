import React, { useState } from 'react';

function DisplayFeedback() {
    const [feedback, setFeedback] = useState({
        category: '',
        rating: '',
        comments: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic validation
        if (!feedback.category || !feedback.rating || !feedback.comments) {
            alert('Please fill out all fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:8085/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedback),
            });

            if (!response.ok) {
                throw new Error('Failed to submit feedback');
            }

            alert('Feedback submitted successfully');
        } catch (error) {
            console.error('Error submitting feedback:', error.message);
            alert('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='text-center mt-3'>
                <h1> Feedback </h1>
                <h6>Your Feedback is more valuable to us! </h6>
            </div>
            <div className='container'>
                <div className='row border border-dark'>
                    <div className='col mt-3'>
                        <select
                            name='category'
                            className='form-select mb-3'
                            value={feedback.category}
                            onChange={handleInputChange}
                        >
                            <option value=''>Select a category</option>
                            <option value='Features'>Product Features</option>
                            <option value='Pricing'>Product Pricing</option>
                            <option value='Usability'>Product Usability</option>
                        </select>

                        <label className='p1'> Rating </label>
                        <div>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <label key={value} className='pe-3'>
                                    <input
                                        type='radio'
                                        name='rating'
                                        value={value}
                                        onChange={handleInputChange}
                                    />{' '}
                                    {value}
                                </label>
                            ))}
                        </div>
                        <textarea
                            name='comments'
                            placeholder='comments'
                            className='w-50 mb-4'
                            value={feedback.comments}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-outline-dark mb-3' type='submit'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default DisplayFeedback;
