import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './Message.jsx'

createRoot(document.getElementById('roota')).render(
  <StrictMode>
    <Message />
    <App></App>
  </StrictMode>,
)
