import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

// Importă alte componente de pagină necesare

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<App />}>
//
//                     {/* Definirea altor rute ca sub-rute ale lui App */}
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     </React.StrictMode>
// );

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();