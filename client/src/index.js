import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { AuthContextProvider } from './components/context/AuthContext';
import {AuthContextProvider} from './Pages/components/context/AuthContext'
import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <GoogleOAuthProvider clientId="426134563814-tvoq8vr23v9hrqa6gtb7hc8mju00aakp.apps.googleusercontent.com">
        <App />
            </GoogleOAuthProvider>
   
    </AuthContextProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

