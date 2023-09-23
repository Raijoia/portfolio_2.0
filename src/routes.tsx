import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Rodape from "./components/Rodape"
import SobreMim from "./pages/SobreMim"
import Formacao from "./pages/Formacao"
import Projetos from "./pages/Projetos"

function AppRouter() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        <Rodape />
      </Router>
    </div>
  )
}

export default AppRouter
