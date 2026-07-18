import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Fonts are pulled in by index.css (@import) — don't also import them here,
// or every @font-face ends up duplicated in the built stylesheet.
import './index.css'
import App from './App'

// Vite's BASE_URL is "/personal-portfolio/" in production; the router wants
// it without the trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
