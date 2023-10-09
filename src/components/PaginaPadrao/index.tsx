import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import Rodape from "../Rodape"

const PaginaPadrao = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Outlet />
      <Rodape />
    </div>
  )
}

export default PaginaPadrao
