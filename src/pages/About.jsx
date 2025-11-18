import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold mb-3">About Flashcart</h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Flashcart is a modern, lightweight e-commerce demo focused on clean UI and a great developer experience. We curate a selection of products across electronics, fashion, and home — with fast shipping and simple returns.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Mission</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Make online shopping simple, delightful and fast.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Vision</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Build small, beautiful shopping experiences for everyone.</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Values</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Trust, simplicity, and delightful design.</p>
            </div>
          </div>
        </section>

        <section className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Team</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">This demo project was built by the Flashcart team — a small group of designers and developers experimenting with UI and e-commerce flows.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
