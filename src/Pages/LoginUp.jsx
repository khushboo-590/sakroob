// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LogInPage from '../components/LogInPage';
// import SignUpPage from '../components/SignUpPage';
// import ForgetPassword from '../components/ForgetPassword';

// const LoginUp = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<LogInPage />} />
//             <Route path="/signup" element={<SignUpPage />} />
//             <Route path="/forgetpassword" element={<ForgetPassword />} />
//         </Routes>
//     );
// };

// export default LoginUp;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';
import ForgetPassword from '../components/ForgetPassword';

const LoginUp = () => {
    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="forgetpassword" element={<ForgetPassword />} />
        </Routes>
    );
};

export default LoginUp;
