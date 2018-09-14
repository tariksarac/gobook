import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
    <div style={{gridArea: 'main'}}>
        <img src={'https://weeblytutorials.com/wp-content/uploads/2017/05/Weebly-404-Page-Not-Found-Error1.png'} style={{width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} alt={''}/>
        <Link to="/">Return to Home Page</Link>
    </div>
);
export default NotFound;