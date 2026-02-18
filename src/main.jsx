import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductProvider } from './context/ProductProvider.jsx'
import { CartProvider } from './context/CartProvider.jsx'
import { CategoryProvider } from './context/CategoryProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
)
