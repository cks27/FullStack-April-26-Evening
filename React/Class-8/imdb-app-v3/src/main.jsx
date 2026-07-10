import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { CountContextProvider } from './context/counter-context.jsx';
import { WatchListContextProvider } from './context/watch-list.jsx';
import { TodoContextProvider } from './context/todo-context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CountContextProvider>
        <WatchListContextProvider>
          <TodoContextProvider>
            <App />
          </TodoContextProvider>
        </WatchListContextProvider>
      </CountContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
