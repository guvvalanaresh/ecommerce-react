import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cart')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems))
    } catch (e) {
      // ignore
    }
  }, [cartItems])

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((it) => it.product.id === product.id)
      if (existing) {
        return prev.map((it) =>
          it.product.id === product.id ? { ...it, quantity: it.quantity + quantity } : it
        )
      }
      return [...prev, { product, quantity }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((it) => it.product.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prev) => prev.map((it) => (it.product.id === productId ? { ...it, quantity } : it)))
  }

  const clearCart = () => setCartItems([])

  const getTotal = () => cartItems.reduce((s, it) => s + (it.product.price || 0) * it.quantity, 0)

  const value = { cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotal }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContext
