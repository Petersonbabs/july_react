
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./components/pages/Contact"
import Homepage from "./components/pages/Homepage"
import Signup from "./components/pages/Signup"
import NotFound from "./components/pages/NotFound"
import MyProducts from "./components/Myproducts"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SIngleProduct from "./components/SIngleProduct"
import LayoutWithHeader from "./components/LayoutWithHeader"

function App() {
  // * => wildcard
  // Layout components
  // params
  // Link
  // Parent compoennt

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<LayoutWithHeader />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<MyProducts />} />
          <Route path="/products/:id" element={<SIngleProduct />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App 