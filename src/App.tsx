import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { Game, Loading, Story} from "./components"

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/gameOn" element={<Story />}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
