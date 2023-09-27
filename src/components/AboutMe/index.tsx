import InicioRight from "../InicioRight"
import TextAboutMe from "../TextAboutMe"

const AboutMe = () => {
  return (
    <>
      <h3 className="text-center text-3xl mt-8" >Sobre mim</h3>
      <main className="md:grid md:grid-cols-2 justify-center items-center gap-40  pt-44 pb-60 ml-28 mr-28">
        <div className="ml-10">
          <InicioRight />
        </div>
        <div className="mr-32">
          <TextAboutMe />
        </div>
      </main>
    </>
  )
}

export default AboutMe