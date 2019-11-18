import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorCatcher from './ErrorCatcher';
import './index.css';

ReactDOM.render(
<BrowserRouter>
<ErrorCatcher>
<App />
</ErrorCatcher> 
</BrowserRouter>,
document.getElementById('root'));