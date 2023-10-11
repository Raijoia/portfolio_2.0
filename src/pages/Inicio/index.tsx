import InicioLeft from "./InicioLeft"
import Image from "../../components/Image"

const Inicio = () => {
  return (
    <main className="md:grid md:grid-cols-2 justify-center gap-40  pt-44 pb-56 ml-28 mr-28">
      <InicioLeft />
      <Image />
    </main>
  )
}

export default Inicio
