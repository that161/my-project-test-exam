import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../components/Account/SignIn";
import SignUp from "../components/Account/SignUp";
import ForgetPassword from "../components/Account/ForgetPassword";

function Login() {
    return (
        <>
            <Routes>
                <Route path="/" element={< SignIn />} />
                <Route path="/signin" element={< SignIn />} />
                <Route path="/signup" element={< SignUp />} />
                <Route path="/forgetpassword" element={< ForgetPassword />} />
            </Routes>
        </>

    );
}

export default Login;