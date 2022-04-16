import React from 'react'

function Mode({ level, setLevel }) {
  const handleChange = (value) => {
    setLevel(parseInt(value, 10))
  }
  return (
    <>
      {level === '' ? (
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="50">Easy</option>
          <option value="200">Medium</option>
          <option value="1000">Expert</option>
        </select>
      ) : (
        <h1> Tapez un chiffre entre 0 et {level} </h1>
      )}
    </>
  )
}

export default Mode
