import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router'
import { HashRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.render(
  <Router>
    <>
      <App />
      <Analytics /> {/* Vercel Analytics */}
      <SpeedInsights /> {/* Vercel Speed Insights */}
    </>
  </Router>,
  document.getElementById('root')
);
