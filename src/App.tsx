import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import { CartProvider } from './components/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <GlobalCss />

        <Rotas />

        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
