interface TitleProps {
  children: string;
}

const Title = ( { children } :TitleProps) => {
  return (
    <h3 className="text-center text-3xl mt-8 font-sans">{children}</h3>  
  )
}

export default Title;