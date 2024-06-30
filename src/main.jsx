import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonProvider } from './context/pokemonContext'
import './index.css'
import AppRoutes from './routes/routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <AppRoutes/>
    </PokemonProvider>
  </React.StrictMode>
)
