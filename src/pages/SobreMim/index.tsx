import Image from '../../components/Image'
import Title from "../../components/Title"
import TextAboutMe from "./TextAboutMe"

const SobreMim = () => {
  return (
    <>
      <Title>Sobre Mim</Title>
      <main className="md:grid md:grid-cols-2 justify-center items-center gap-40 pt-28 pb-56 ml-28 mr-28">
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

export default SobreMim