import photo from './photo.jpg'

const InicioRight = () => {
  return (
    <aside className="flex items-center max-sm:hidden">
      <img src={photo} alt="Foto do Raí Joia" className='rounded-full w-52 h-52' />
    </aside>
  )
}

export default InicioRight