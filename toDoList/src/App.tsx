import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Details from "./components/pages/Details"
import { TaskProvider } from "./components/providers/TaskProvider"

function App() {
  
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/task/:id" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  )
}

export default App

