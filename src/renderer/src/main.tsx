import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/global.css'
import './assets/index.css' //TODO: Remover para utilizar o global.css (está com o tailwindcss)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
