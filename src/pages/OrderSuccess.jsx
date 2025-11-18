import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function OrderSuccess() {
  const [play, setPlay] = useState(0)

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <div className="mb-6 flex justify-center">
        <div
          role="img"
          aria-label="Order placed successfully"
          className="cursor-pointer"
          onClick={() => setPlay((p) => p + 1)}
          title="Click to replay animation"
        >
          <svg key={play} width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="60" stroke="#D1FAE5" strokeWidth="12" />
            <circle
              cx="70"
              cy="70"
              r="60"
              stroke="#10B981"
              strokeWidth="6"
              strokeDasharray="377"
              strokeDashoffset="377"
              strokeLinecap="round"
              className="order-success-circle"
            />
            <path
              d="M45 73 L62 90 L96 56"
              stroke="#065F46"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="120"
              strokeDashoffset="120"
              className="order-success-check"
            />
          </svg>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-green-600">Order Placed Successfully</h1>
      <p className="mb-6 text-gray-500">Thank you! Your order has been received and is being processed.</p>

      <div className="flex justify-center gap-4">
        <Link to="/" className="px-4 py-2 bg-black text-white rounded">Back to Home</Link>
        <Link to="/products" className="px-4 py-2 border rounded">Continue Shopping</Link>
      </div>

      <style>{`
        .order-success-circle {
          animation: circle-draw 700ms ease forwards;
        }

        .order-success-check {
          animation: check-draw 500ms ease 550ms forwards;
        }

        @keyframes circle-draw {
          from { stroke-dashoffset: 377; opacity: 0.9 }
          to { stroke-dashoffset: 0; opacity: 1 }
        }

        @keyframes check-draw {
          from { stroke-dashoffset: 120; opacity: 0 }
          to { stroke-dashoffset: 0; opacity: 1 }
        }
      `}</style>
    </div>
  )
}
