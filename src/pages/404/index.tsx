import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Page404 = () => {
  const navigate = useNavigate()

  return (
    <main className="flex flex-col text-center justify-center h-screen w-">
      <div>
        <h1>Error 404</h1>
        <p className="pt-3 pb-3">Página não encontrada</p>
        <Button variant="contained" onClick={() => navigate(-1)}>
            Voltar para a página anterior
        </Button>
      </div>
    </main>
  )
}

export default Page404