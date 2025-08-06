
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./components/pages/Contact"
import Homepage from "./components/pages/Homepage"
import Signup from "./components/pages/Signup"
import NotFound from "./components/pages/NotFound"

function App() {
  // * => wildcard

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App 