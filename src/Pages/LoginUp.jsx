
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from '../components/SignUpPage';
import ForgetPassword from '../components/ForgetPassword';
import LoginPage from '../components/LogInPage';

const LoginUp = ({ onLogin }) => {
    return (
        <Routes>
            <Route index element={<LoginPage onLogin={onLogin} />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
        </Routes>
    );
};

export default LoginUp;
