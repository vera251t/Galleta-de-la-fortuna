import getrandomElementFromArray from "../utils/randomElementFromArray"
import phrase from '../utils/phrases.json'

export const ButtonPhrase = ({setPhraseRandom, setPathRandom, arrBackground}) => {

    const handleRandomPhrase = () => {
        const newRandonPhrase = getrandomElementFromArray(phrase)
        setPhraseRandom(newRandonPhrase)
        const newPath = getrandomElementFromArray(arrBackground)
        setPathRandom(newPath)
    }

  return (
    <button className="app__btn" onClick={handleRandomPhrase}>Ver otro</button>
  )
}

export default ButtonPhrase