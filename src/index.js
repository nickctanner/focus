import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

// import LoadingPage from './components/LoadingPage';

import './styles.css';

// TODO: Add loading page --> not sure where yet

// ReactDOM.render(<LoadingPage />, document.getElementById('root'));

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// react-page-loading (module)
