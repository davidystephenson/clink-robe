# `ClinkRobe`

A Chakra UI v2 and react-router-dom link for the robes UI library.

## Installation

```bash
npm install clink-robe
```

## Usage

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ClinkRobe } from "clink-robe"
import { RobesProvider, ColorSwitchRobe } from "robes"

export default function App() {
  return (
    <RobesProvider>
      <BrowserRouter>
        <ColorSwitchRobe />
        <ClinkRobe to="/">Home</ClinkRobe>
        <ClinkableRobe to="/test">Test</ClinkableRobe>
        <ButtonClinkRobe to="/test">Test</ButtonClinkRobe>
        <ButtonClinkableRobe to="/test">Test</ButtonClinkableRobe>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/test" element={<>Test</>} />
          <Route path="/register" element={<>Register</>} />
        </Routes>
      </BrowserRouter>
    </RobesProvider>
  )
}
```
