import React from 'react';
import Home from '../pages/Home/home';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <Home />
    },
    
];

export const router = createBrowserRouter(routes);
