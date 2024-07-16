import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import 'antd/dist/reset.css'


const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
