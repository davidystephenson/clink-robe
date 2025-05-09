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

export default function App() {
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
```