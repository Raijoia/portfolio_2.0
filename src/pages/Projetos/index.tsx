import Title from "../../components/Title"
import { v4 as uuidv4 } from 'uuid';

const Projetos = () => {
  const projetos = [
    {
      id: uuidv4(),
      nome: "Organo",
      vercel: "https://organo-with-typescript-tau.vercel.app/",
      github: "https://github.com/Raijoia/organo_with_typescript",
    },
    {
      id: uuidv4(),
      nome: "Aluroni",
      vercel: "https://aluroni-otimizado.vercel.app/",
      github: "https://github.com/Raijoia/aluroni_otimizado",
    },
    {
      id: uuidv4(),
      nome: "AlFood",
      vercel: "https://al-food-iota.vercel.app/",
      github: "https://github.com/Raijoia/AlFood",
    },
    {
      id: uuidv4(),
      nome: "Timer pra estudo",
      vercel: "https://time-for-tasks.vercel.app/",
      github: "https://github.com/Raijoia/time_for_tasks",
    },
  ]

  console.log(projetos)

  return (
    <Title>Projetos</Title>
  )
}

export default Projetos