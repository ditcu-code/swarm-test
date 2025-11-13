import { Route, Routes } from "react-router-dom"
import Navigation from "./components/layouts/navigation"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
