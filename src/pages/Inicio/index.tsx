import InicioLeft from "../../components/InicioLeft"
import InicioRight from "../../components/InicioRight"

const Inicio = () => {
  return (
    <div className="grid grid-cols-2  justify-center gap-40  pt-44 pb-60 pl-56">
      <InicioLeft />
      <InicioRight />
    </div>
  )
}

export default Inicio