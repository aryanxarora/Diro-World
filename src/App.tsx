import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import { Loading } from "./components"
const Game = lazy(() => import("./components/Game"))
const Story = lazy(() => import("./components/Quest"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/quest" element={<Story />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
