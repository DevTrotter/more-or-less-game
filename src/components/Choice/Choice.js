import { useState } from 'react'
import moreOrLess from '../../utils/moreOrLess'

function Choice({ randomNumber, reset }) {
  const [valueInput, setValueInput] = useState('')
  const [info, setInfo] = useState('')

  const handleChange = (e) => {
    setValueInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setValueInput('')
    setInfo(moreOrLess(+valueInput, randomNumber))
  }

  const handleClick = () => {
    reset()
  }

  return (
    <>
      <h3>{info}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          value={valueInput}
        />
        <button type="submit">Proposer</button>
      </form>
      {info === 'win' && (
        <button type="button" onClick={() => handleClick()}>
          Rejouer
        </button>
      )}
    </>
  )
}

export default Choice
