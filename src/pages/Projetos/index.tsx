import { Button } from "@mui/material"
import Title from "../../components/Title"
import { v4 as uuidv4 } from "uuid"

const Projetos = () => {
  const projetos = [
    {
      id: uuidv4(),
      nome: "Organo",
      vercel: "https://organo-with-typescript-tau.vercel.app/",
      github: "https://github.com/Raijoia/organo_with_typescript",
      descricao:
        "Projeto desenvolvido para a organização de times de desenvolvimento para empresas",
      tecnologias: "TypeScript, React.js, CSS e Git",
      image: "/src/pages/Projetos/images/Organo.png",
    },
    {
      id: uuidv4(),
      nome: "Aluroni",
      vercel: "https://aluroni-otimizado.vercel.app/",
      github: "https://github.com/Raijoia/aluroni_otimizado",
      descricao:
        "Projeto desenvolvido como um site para cardápio de restaurante usando API para atualização e adicionamento de novos pratos",
      tecnologias: "TypeScript, React.js, SCSS e Git",
      image: "/src/pages/Projetos/images/Aluroni.png",
    },
    {
      id: uuidv4(),
      nome: "AlFood",
      vercel: "https://al-food-iota.vercel.app/",
      github: "https://github.com/Raijoia/AlFood",
      descricao:
        "Projeto desenvolvido para a busca de pratos diferentes para o dia a dia, com diversos restaurantes e pratos, podendo ser adicionador pela API-REST",
      tecnologias: "TypeScript, React.js, SCSS, Axios e Git",
      image: "/src/pages/Projetos/images/AlFood.png",
    },
    {
      id: uuidv4(),
      nome: "Timer",
      vercel: "https://time-for-tasks.vercel.app/",
      github: "https://github.com/Raijoia/time_for_tasks",
      descricao:
        "Projeto desenvolvido para organizar o tempo de estudos, podendo ser usado como pomodoro ou como timer normal",
      tecnologias: "TypeScript, React.js, SCSS e Git",
      image: "/src/pages/Projetos/images/Timer.png",
    },
  ]

  console.log(projetos)

  return (
    <>
      <Title>Projetos</Title>
      <ul className="flex flex-wrap gap-14 p-14">
        {projetos.map((projeto) => (
          <li
            key={projeto.id}
            className="flex flex-col sm:grid sm:grid-cols-2 items-center bg-gray-200 sm:rounded-xl sm:shadow-lg sm:hover:shadow-gray-500 sm:hover:shadow-lg h-60"
          >
            <a
              href={projeto.vercel}
              target="_blank"
              className="flex justify-center"
            >
              <img
                src={projeto.image}
                alt={`Imagem do projeto ${projeto.nome}`}
                className="w-6/12 "
              />
            </a>
            <div className="text-center gap-5 mr-14">
              <div className="flex flex-col gap-2 pb-2">
                <h3 className="font-sans">{projeto.descricao}</h3>
                <p className="font-sans font-bold">{`Tecnologias: ${projeto.tecnologias}`}</p>
              </div>
              <Button variant="contained">
                <a href={projeto.github} target="_blank">
                  Respositório do projeto
                </a>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Projetos
