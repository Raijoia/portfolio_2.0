import Title from "../../components/Title"
import Card from "./Card"

const Formacao = () => {
  const formacao = [
    {
      id: 1,
      curso: "Ciência Da Computação",
      instituicao: "Universidade São Judas Tadeu",
      periodo: "2023 - 2026",
    },
    {
      id: 2,
      curso: "Formação a partir do zero: iniciante na programação",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: 3,
      curso: "Formação a partir do zero: HTML e CSS para projetos web",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: 4,
      curso: "Formação: Explore React com JavaScript",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: 5,
      curso:
        "Formação: Desenvolva aplicações Web em JavaScipt com tarefas concorrentes e orientadas a objetos",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: 6,
      curso: "Formação: Desenvolva aplicações Web em JavaScipt",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
    {
      id: 7,
      curso: "Formação: Gerencie aplicações React com TypeScript",
      instituicao: "Alura",
      periodo: "2023 - 2023",
    },
  ]

  return (
    <>
      <Title>Formação</Title>

      <ul className="flex gap-10 mt-20 mb-56 ml-9 mr-9 flex-wrap justify-center">
        {formacao.map((item) => (
          <Card {...item} />
        ))}
      </ul>
    </>
  )
}

export default Formacao
