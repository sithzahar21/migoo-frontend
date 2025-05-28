// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense>
      <App />
  </Suspense>,
)
