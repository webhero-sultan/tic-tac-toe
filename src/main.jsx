import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Board from './components/Board'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Board/>
  </StrictMode>,
)