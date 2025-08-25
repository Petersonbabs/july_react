
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
import Signin from "./components/pages/Signin"
import Dashboard from "./components/pages/Dashboard"
import ProtectedRoutes from "./components/ProtectedRoutes"
import AuthProvider from "./contexts/AuthContexts"
import ProductProvider from "./contexts/ProductContext"
import ThemeProvider from "./contexts/ThemeContext"
import AddProductForm from "./components/AddProductForm"
import { Toaster } from "sonner"

function App() {
  // * => wildcard
  // Layout components
  // params
  // Link
  // Parent compoennt

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <ThemeProvider>
              <Header />
              <Toaster richColors position="bottom-left" closeButton visibleToasts={2} />
              <Routes>
                <Route element={<LayoutWithHeader />}>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/products" element={<MyProducts />} />
                <Route path="/add-product" element={<AddProductForm />} />
                <Route path="/products/:id" element={<SIngleProduct />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </ThemeProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App 