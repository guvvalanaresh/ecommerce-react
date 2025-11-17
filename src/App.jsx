import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Products from './pages/ProductListing'
import ProductDetailPage from './pages/ProductDetails'
import Cart from "./pages/Cart"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
