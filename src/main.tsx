import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PortfolioProvider } from './context/PortfolioProvider.tsx'
import Router from './routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioProvider>
      <Router />
    </PortfolioProvider>
  </StrictMode>,
)
