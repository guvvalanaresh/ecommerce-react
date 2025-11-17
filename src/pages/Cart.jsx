import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getTotal } = useCart()

    const navigate = useNavigate()

    return (
        <div>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-7xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {cartItems.length === 0 && (
                                    <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">Your cart is empty.</div>
                                )}

                                {cartItems.map(({ product, quantity }) => (
                                    <div key={product.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <div className="shrink-0 md:order-1">
                                                <img className="h-20 w-20 object-contain" src={product.image} alt={product.title} />
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <p className="text-base font-medium text-gray-900 dark:text-white">{product.title}</p>

                                                <div className="flex items-center gap-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCart(product.id)}
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500 mt-3"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => updateQuantity(product.id, quantity - 1)}
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
                                                    >
                                                        -
                                                    </button>
                                                    <div className="px-4 text-sm">{quantity}</div>
                                                    <button
                                                        type="button"
                                                        onClick={() => updateQuantity(product.id, quantity + 1)}
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">₹{(product.price * quantity).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                                <div className="space-y-4">
                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">₹{getTotal().toFixed(2)}</dd>
                                    </dl>
                                </div>

                                                                <button
                                                                    onClick={() => navigate('/checkout')}
                                                                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                                >
                                                                    Proceed to Checkout
                                                                </button>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <a href="/products" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
