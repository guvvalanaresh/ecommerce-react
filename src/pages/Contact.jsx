import React, { useState } from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import { toast } from 'react-toastify'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields')
      return
    }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setForm({ name: '', email: '', message: '' })
      toast.success('Message sent — we will get back to you soon')
    }, 900)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-3">Contact Us</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Have a question or need help? Send us a message and we'll reply as soon as possible.</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="w-full rounded border px-3 py-2 bg-white dark:bg-gray-800" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="w-full rounded border px-3 py-2 bg-white dark:bg-gray-800" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows={6} className="w-full rounded border px-3 py-2 bg-white dark:bg-gray-800" />

            <div>
              <button type="submit" disabled={sending} className="px-4 py-2 bg-black text-white rounded">{sending ? 'Sending...' : 'Send Message'}</button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  )
}
