import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './main/App';
import { AppProvider } from './main/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
