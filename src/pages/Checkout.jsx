import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cartItems, getTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  })

  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    // simple validation
    if (!form.fullName || !form.email || cartItems.length === 0) {
      alert('Please provide name, email and have items in cart.')
      return
    }
    setSubmitting(true)
    // simulate API delay
    setTimeout(() => {
      // clear cart and navigate to success page
      clearCart()
      navigate('/order-success')
    }, 800)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input name="address" value={form.address} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">City</label>
            <input name="city" value={form.city} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">PIN code</label>
            <input name="pincode" value={form.pincode} onChange={handleChange} className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div>
            <button type="submit" disabled={submitting} className="mt-2 w-full bg-black text-white px-4 py-2 rounded">
              {submitting ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </form>

        <aside className="border rounded p-4">
          <h2 className="font-semibold text-lg">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="mt-3">Your cart is empty.</p>
          ) : (
            <div className="mt-3 space-y-3">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt={product.title} className="w-12 h-12 object-contain" />
                    <div>
                      <div className="text-sm font-medium">{product.title}</div>
                      <div className="text-xs text-gray-500">Qty: {quantity}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">₹{(product.price * quantity).toFixed(2)}</div>
                </div>
              ))}

              <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                <div>Total</div>
                <div>₹{getTotal().toFixed(2)}</div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
