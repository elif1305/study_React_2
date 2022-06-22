import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';  // App.js seklinde yazilsa da olur .js ve jsx i otomatik olarak algilar.
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// bu bolum genelde sakin olur yani dolu olmaz, componentler app.js e yapilir.