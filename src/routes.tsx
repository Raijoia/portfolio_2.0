import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import SobreMim from "./pages/SobreMim"
import Formacao from "./pages/Formacao"
import Projetos from "./pages/Projetos"
import PaginaPadrao from "./components/PaginaPadrao"
import Page404 from "./pages/404"

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="formacao" element={<Formacao />} />
          <Route path="projetos" element={<Projetos />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
