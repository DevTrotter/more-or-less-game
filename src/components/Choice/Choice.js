import { useState } from 'react'

function Choice() {
  const [valueInput, setValueInput] = useState('')

  const handleChange = (e) => {
    setValueInput(e.target.value)
  }

  return (
    <form>
      <input type="text" onChange={(e) => handleChange(e)} value={valueInput} />
      <button type="submit">Proposer</button>
    </form>
  )
}

export default Choice
