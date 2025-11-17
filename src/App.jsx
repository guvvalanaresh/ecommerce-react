import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Products from './pages/ProductListing'
import ProductDetailPage from './pages/ProductDetails'
import Cart from "./pages/Cart"
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'

import { Flip, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
      />
    </>
  )
}

export default App
