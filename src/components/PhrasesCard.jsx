
export const PhrasesCard = ({phraseRandom}) => {
  return (
    <>
      <p className="card">
        {phraseRandom.phrase}
      </p>
      <p className="author">
        Fuente: {phraseRandom.author}
      </p>
    </>
  )
}

export default PhrasesCard
