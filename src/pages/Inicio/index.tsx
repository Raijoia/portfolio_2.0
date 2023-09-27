import InicioLeft from "../../components/InicioLeft"
import InicioRight from "../../components/InicioRight"

const Inicio = () => {
  return (
    <main className="md:grid md:grid-cols-2 justify-center gap-40  pt-44 pb-60 ml-28 mr-28">
      <InicioLeft />
      <InicioRight />
    </main>
  )
}

export default Inicio