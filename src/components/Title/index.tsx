import ITitle from "../../interfaces/ITitle";

const Title = ( { children } :ITitle) => {
  return (
    <h3 className="text-center text-3xl mt-8 font-sans">{children}</h3>  
  )
}

export default Title;