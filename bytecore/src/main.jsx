import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WrappedApp from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WrappedApp />
  </StrictMode>,
)
