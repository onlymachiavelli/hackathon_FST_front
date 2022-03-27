import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster />
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
