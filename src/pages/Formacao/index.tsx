import Title from "../../components/Title"

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
      <div className="">
          <ul className="flex gap-10 mt-20 mb-72 ml-9 mr-9 flex-wrap">
            {formacao.map((item) => (
              <li
                key={item.id}
                className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col items-center sm:hover:shadow-gray-500 sm:hover:shadow-lg font-sans" 
              >
                <h4 className="font-bold">{item.curso}</h4>
                <p className="text-center">
                  Instituição: {item.instituicao} <br />{" "}
                  <b>Periodo: {item.periodo}</b>
                </p>{" "}
                <br />
              </li>
            ))}
          </ul>
      </div>
    </>
  )
}

export default Formacao