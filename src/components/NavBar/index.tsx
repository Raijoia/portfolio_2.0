import { Coffee, Computer, HomeOutlined } from "@mui/icons-material"
import { BottomNavigation, BottomNavigationAction } from "@mui/material"

const NavBar = () => {
  return (
    <header className="flex justify-around alignItens-center items-center pt-5">
      <h1>Raí Joia</h1>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
        <BottomNavigationAction label="Sobre Mim" icon={<Coffee />} />
        <BottomNavigationAction label="Formação" icon={<Computer />} />
      </BottomNavigation>
    </header>
  )
}

export default NavBar