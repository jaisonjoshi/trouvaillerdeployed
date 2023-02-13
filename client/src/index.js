import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

