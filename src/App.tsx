import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Heading, HStack } from "@chakra-ui/react"
import ClinkRobe from "./ClinkRobe"
import { ColorSwitchRobe, RobesProvider } from "robes"
import ButtonClinkRobe from "./ButtonClinkRobe"

function App() {
  return (
    <RobesProvider>
      <BrowserRouter>
        <ColorSwitchRobe />
        <Heading>Hello World</Heading>
        <HStack>
          <ClinkRobe to="/">Home</ClinkRobe>
          <ClinkRobe to="/test">Test</ClinkRobe>
          <ButtonClinkRobe to="/test">Test</ButtonClinkRobe>
        </HStack>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/test" element={<div>Test</div>} />
        </Routes>
      </BrowserRouter>
    </RobesProvider>
  )
}

export default App
