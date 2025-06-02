import { createContext, useContext, useState } from 'react'

type CartContextType = {
  cartCount: number
  addToCart: () => void
}

export const CartContext = createContext<CartContextType>({
  cartCount: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addToCart: () => {}
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => setCartCount((count) => count + 1)

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
