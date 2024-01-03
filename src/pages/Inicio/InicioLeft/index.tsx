import { Button } from "@mui/material"
import { v4 as uuidv4 } from "uuid"

const InicioLeft = () => {
  const sociais = [
    {
      link: "https://github.com/Raijoia",
      name: "GitHub",
      id: uuidv4(),
    },
    {
      link: "https://www.linkedin.com/in/raijoia/",
      name: "Linkedin",
      id: uuidv4(),
    },
    {
      link: "https://api.whatsapp.com/send?phone=5511977733585",
      name: "WhatsApp",
      id: uuidv4()
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl text-center">
        Raí Joia <br /> Desenvolvedor Full Stack
      </h2>
      <p className="ml-6">
        Eu sou um desenvolvedor full stack com especialidades em{" "}
        <b className="font-bold text-center">
          Next, React, TypeScript, JavaScript, NodeJS, MongoDB, Express, Java, SpringBoot, MySQL, Tailwind, Git e SASS
        </b>
      </p>
      <div className="flex gap-5 lg:gap-10 mt-5">
        {sociais.map((social, index) => (
          <Button variant="contained" key={index}>
            <a href={social.link} target="_blank">
              {social.name}
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default InicioLeft