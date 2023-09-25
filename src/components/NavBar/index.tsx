import { Coffee, Computer, HomeOutlined } from "@mui/icons-material"
import FolderCopyIcon from "@mui/icons-material/FolderCopy"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="flex justify-around alignItens-center items-center pt-5 ">
      <h1 className="hidden sm:block font-mono">Olá, eu sou o Raí Joia</h1>
      <BottomNavigation showLabels>
        <Link to='/' >
          <BottomNavigationAction label="Home" icon={<HomeOutlined />} /> 
        </Link>
        <Link to='/sobremim'>
          <BottomNavigationAction label="Sobre Mim" icon={<Coffee />} />
        </Link>
        <Link to='/formacao'>
          <BottomNavigationAction label="Formação" icon={<Computer />} />
        </Link>
        <Link to='/projetos'>
          <BottomNavigationAction label="Projetos" icon={<FolderCopyIcon />} />
        </Link>
      </BottomNavigation>
    </header>
  )
}

export default NavBar