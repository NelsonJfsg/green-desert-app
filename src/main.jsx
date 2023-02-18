import React from 'react'
import ReactDOM from 'react-dom/client'

{/** Router */}
import { BrowserRouter } from 'react-router-dom'
import { GreenApp } from './greenApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GreenApp />
    </BrowserRouter>
  </React.StrictMode>,
)
