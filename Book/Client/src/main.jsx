import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <GoogleOAuthProvider clientId="976259517969-tqku1q2uifa0b1qdtke9197c33g5hv1t.apps.googleusercontent.com">
          <App />
      </GoogleOAuthProvider>;
    </BrowserRouter>
  </StrictMode>,
)
