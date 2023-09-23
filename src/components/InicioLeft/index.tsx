import { Button } from "@mui/material"

const InicioLeft = () => {
  const sociais = [
    {
      link: "https://github.com/Raijoia",
      name: "GitHub",
      id: 1,
    },
    {
      link: "https://www.linkedin.com/in/raijoia/",
      name: "Linkedin",
      id: 2,
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="text-4xl text-center">
        Raí Joia <br /> Desenvolvedor Front-end
      </h2>
      <p className="ml-6">
        Eu sou um desenvolvedor front-end com especialidades em{" "}
        <b className="font-bold text-center">
          React, TypeScript, JavaScript, Git e SASS
        </b>
      </p>
      <div className="flex gap-5 lg:gap-10 mt-5">
        {sociais.map((social, index) => (
          <Button variant="contained" key={index}>
            <a href={social.link} target="_blank" >{social.name}</a>
          </Button>
        ))}
      </div>
    </main>
  )
}

export default InicioLeft