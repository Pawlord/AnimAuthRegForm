import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SpeedInsights>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SpeedInsights>

);
