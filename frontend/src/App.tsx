
import React, { Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/router';




const App = () => {
    return <RouterProvider router={router} />



}

export default App;