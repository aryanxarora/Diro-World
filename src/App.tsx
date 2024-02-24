import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
import { Loading } from "./components"
const Game = lazy(() => import("./components/Game"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
