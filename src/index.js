import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <BrowserRouter /* future={{ v7_startTransition: true, v7_relativeSplatPath: true }} */>
        <App />
    </BrowserRouter>
// </React.StrictMode>
);

// Optional: Measuring performance
reportWebVitals();
