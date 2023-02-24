import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/User/Header";

function Login() {
    return (
        <>
            <Routes>
                <Route path="/" element={< Header />} />
            </Routes>
        </>

    );
}

export default Login;