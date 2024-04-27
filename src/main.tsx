import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './styles.css';
import { AxiosInterceptor } from './interceptors';
import React from 'react';

AxiosInterceptor();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
