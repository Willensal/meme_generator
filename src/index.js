import { react, tsIndexSignature } from '@babel/types';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Meme from "./components/Meme"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

