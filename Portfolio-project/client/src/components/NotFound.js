import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 ~ Return to the homepage ~ <Link to="/">Home</Link>
    </div>
);

export default NotFoundPage;