import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RobesProvider } from "robes"
import ClinkRobe from "./ClinkRobe"

function App() {
  return (
    <BrowserRouter>
      <RobesProvider>
        <ClinkRobe to="/">Home</ClinkRobe>
        <Routes>
          <Route path="/" element={<>Hello World</>} />
        </Routes>
      </RobesProvider>
    </BrowserRouter>
  )
}

export default App
