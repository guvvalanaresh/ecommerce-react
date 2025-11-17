import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderSuccess() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-500">Order Placed Successfully</h1>
      <p className="mb-6 text-gray-500">Thank you! Your order has been received and is being processed.</p>
      <div className="flex justify-center gap-4">
        <Link to="/" className="px-4 py-2 bg-black text-white rounded">Back to Home</Link>
        <Link to="/products" className="px-4 py-2 border rounded">Continue Shopping</Link>
      </div>
    </div>
  )
}
