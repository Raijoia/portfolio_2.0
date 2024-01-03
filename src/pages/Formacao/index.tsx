import Title from "../../components/Title"
import Card from "./Card"
import { v4 as uuidv4 } from "uuid"

const Formacao = () => {
  const formacao = [
    {
      id: uuidv4(),
      curso: "Ciência Da Computação",
      instituicao: "Universidade São Judas Tadeu",
      periodo: "2023 - 2026",
    },
    {
      id: uuidv4(),
      curso: "Formação a partir do zero: iniciante na programação",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso: "Formação a partir do zero: HTML e CSS para projetos web",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso: "Formação: Explore React com JavaScript",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso:
        "Formação: Desenvolva aplicações Web em JavaScipt com tarefas concorrentes e orientadas a objetos",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso: "Formação: Desenvolva aplicações Web em JavaScipt",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso: "Formação: Gerencie aplicações React com TypeScript",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso: "Formação: Formação Java e Spring Boot",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso: "Formação: Melhore sua aplicação React com o Next.js",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso: "Formação: Melhore sua experiência de desenvolvimento com TypeScript",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: uuidv4(),
      curso: "Formação: Performe sua aplicação React com Next.js Full stack",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
  ]

  return (
    <>
      <Title>Formação</Title>

      <ul className="flex gap-10 mt-14 mb-20 ml-9 mr-9 flex-wrap justify-center">
        {formacao.map((item) => (
          <Card {...item} />
        ))}
      </ul>
    </>
  )
}

export default Formacao
