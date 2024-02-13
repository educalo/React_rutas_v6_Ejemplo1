import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom';

//BrowserRouter indica se van añadir enlaces, inyecta propiedades a nuestro componente para poder acceder al historial de navegación, realizar redirecciones, etc
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
