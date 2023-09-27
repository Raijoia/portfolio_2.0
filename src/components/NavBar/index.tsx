import { Coffee, Computer, HomeOutlined } from "@mui/icons-material"
import FolderCopyIcon from "@mui/icons-material/FolderCopy"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <header className="flex justify-around alignItens-center items-center pt-5 ">
      <h1 className="hidden sm:block font-mono">Olá, eu sou o Raí Joia</h1>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Home"
          icon={<HomeOutlined />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Sobre Mim"
          icon={<Coffee />}
          onClick={() => navigate("/sobremim")}
        />
        <BottomNavigationAction
          label="Formação"
          icon={<Computer />}
          onClick={() => navigate("/formacao")}
        />
        <BottomNavigationAction
          label="Projetos"
          icon={<FolderCopyIcon />}
          onClick={() => navigate("/projetos")}
        />
      </BottomNavigation>
    </header>
  )
}

export default NavBar
