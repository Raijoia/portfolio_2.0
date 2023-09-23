import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Rodape from "./components/Rodape"

function AppRouter() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
        <Rodape />
      </Router>
    </div>
  )
}

export default AppRouter
