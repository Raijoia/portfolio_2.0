import ICard from "../../../interfaces/ICard"

const Card = ( { id, curso, instituicao, periodo } :ICard) => {
  return (
    <li
      key={id}
      className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col items-center sm:hover:shadow-gray-500 sm:hover:shadow-lg font-sans"
    >
      <h4 className="font-bold">{curso}</h4>
      <p className="text-center">
        Instituição: {instituicao} <br /> <b>Periodo: {periodo}</b>
      </p>{" "}
      <br />
    </li>
  )
}

export default Card