import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './index.css'
// import GoogleLoginComponent from './components/GoogleLoginComponent';
// import FeedbackForm from './components/FeedbackForm';
// import FeedbackDisplay from './components/FeedbackDisplay';

const dashBoard = () => {
//   const [user, setUser] = useState(null);

//   const handleLoginSuccess = (response) => {
//     console.log(response.profileObj);
//     setUser(response.profileObj);
//   };

//   const handleLoginFailure = (response) => {
//     console.error(response);
//   };

  return (
   <>
   <div className='nav'>
   <Link to= "/"><h1>Tensor</h1></Link>
    <Link to= "/feedback"><h5 id='headd'>Feedback</h5></Link>
    <Link to= "/comments"><h5>Comments</h5></Link>
   </div>
      </>
  );
};

export default dashBoard;
