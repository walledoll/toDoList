import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Details from "../pages/Details"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

