import { Route, Routes } from "react-router-dom"
import Navigation from "./components/layouts/navigation"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navigation />
      <div className="mx-7.5 sm:mx-18 lg:mx-29">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
