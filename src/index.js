import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


import TokenService from './services/TokenService';

/* middlewares */
import Protected from './middlewares/Protected';

import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="dashboard" element={<Protected isLoggedIn={TokenService.isLogged }><DashboardPage title="Dashboard" /></Protected>} />
        </Routes>
    </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
