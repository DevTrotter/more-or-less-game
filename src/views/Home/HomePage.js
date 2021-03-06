import { useState, useEffect } from 'react'
import Choice from '../../components/Choice/Choice'
import Mode from '../../components/Mode/Mode'
import createRandomNumber from '../../utils/createRandomNumber/createRandomNumber'

export default function HomePage() {
  const [level, setLevel] = useState('')
  const [randomNumber, setRandomNumber] = useState(0)

  const reset = () => {
    setLevel('')
    setRandomNumber(0)
  }

  useEffect(() => {
    if (level !== '') setRandomNumber(createRandomNumber(level))
  }, [level])

  return (
    <>
      <Mode level={level} setLevel={setLevel} />
      {randomNumber !== 0 && (
        <Choice randomNumber={randomNumber} reset={reset} />
      )}
    </>
  )
}
