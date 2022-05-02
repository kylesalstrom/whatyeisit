import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import GA4React from "ga-4-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
const ga4react = new GA4React("G-0E3VXHGXK4");

(async _ => {
  await ga4react.initialize()
  .then()
  .catch(err => console.log("Analytics Failure."))
  .finally(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
})();