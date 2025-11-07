import React, { StrictMode } from 'react'; // React এখানে এক্সপ্লিসিটভাবে ইমপোর্ট করা হয়েছে
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)