import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Products from './pages/ProductListing'
import ProductDetailPage from './pages/ProductDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
