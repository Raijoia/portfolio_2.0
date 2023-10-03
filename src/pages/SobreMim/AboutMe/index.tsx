import TextAboutMe from "../TextAboutMe"
import Image from "../../../components/Image";
import Title from "../../../components/Title";

const AboutMe = () => {
  return (
    <>
      <Title>Sobre Mim</Title>
      <main className="md:grid md:grid-cols-2 justify-center items-center gap-40  pt-44 pb-60 ml-28 mr-28">
        <div className="ml-10">
          <Image />
        </div>
        <div className="mr-32">
          <TextAboutMe />
        </div>
      </main>
    </>
  )
}

export default AboutMe
