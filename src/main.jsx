import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoffeeContextProvider from './context/CoffeeContext.jsx'
import CartContextProvider from './context/CartContext.jsx'
import PriceContextProvider from './context/PriceContext.jsx'
import QuantityContextProvider from './context/QuantityContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoffeeContextProvider>
      <CartContextProvider>
        <PriceContextProvider>
          <QuantityContextProvider>
            <App />
          </QuantityContextProvider>
        </PriceContextProvider>
      </CartContextProvider>
    </CoffeeContextProvider>
    
  </React.StrictMode>,
)
