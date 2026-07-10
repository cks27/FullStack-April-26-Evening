import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { CountContextProvider } from './context/counter-context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CountContextProvider>
        <App />
      </CountContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
