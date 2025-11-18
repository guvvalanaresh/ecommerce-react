import React, { useState } from "react"
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (!email) return
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 2500)
    }

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className="mt-12 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                {/* Left: Links & copyright */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold">FLASHCART</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Curated products — simple shopping.</p>

                    <ul className="flex gap-4 mt-3 text-sm">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/products" className="hover:underline">Products</a></li>
                        <li><a href="/" className="hover:underline">About</a></li>
                        <li><a href="/" className="hover:underline">Contact</a></li>
                    </ul>

                    <div className="flex items-center gap-3 mt-4">
                        <a aria-label="Twitter" href="#" className="text-gray-500 hover:text-gray-700"><FaTwitter /></a>
                        <a aria-label="Facebook" href="#" className="text-gray-500 hover:text-gray-700"><FaFacebookF /></a>
                        <a aria-label="Instagram" href="#" className="text-gray-500 hover:text-gray-700"><FaInstagram /></a>
                    </div>

                    <div className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} Naresh. All rights reserved.</div>
                </div>

                {/* Right: Newsletter */}
                <div>
                    <h4 className="font-semibold">Newsletter</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Subscribe to get occasional updates and offers.</p>

                    <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
                        <label htmlFor="footer-email" className="sr-only">Email</label>
                        <input id="footer-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded border px-3 py-2 bg-white dark:bg-gray-800" />
                        <button type="submit" className="px-4 py-2 bg-black text-white rounded">Subscribe</button>
                    </form>

                    {subscribed && <div className="mt-2 text-sm text-green-600 dark:text-green-400">Thanks for subscribing!</div>}

                    <div className="mt-4">
                        <button onClick={scrollToTop} className="text-sm text-gray-500 hover:underline">Back to top</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer