import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    const isAuthenticated = false; // Replace with your auth logic
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            console.log('Not authenticated, redirecting...');
            navigate("/signin", { replace: true });
        }
    }, [isAuthenticated, navigate]);


    return (
        <Outlet />
    )

}

export default ProtectedRoutes