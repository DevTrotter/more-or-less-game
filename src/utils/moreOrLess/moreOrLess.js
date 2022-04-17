const moreOrLess = (value, randomNumber) => {
  console.log(value, randomNumber)
  let response = ''
  if (randomNumber === value) response = 'win'
  if (randomNumber < value) response = "c'est moins"
  if (randomNumber > value) response = "c'est plus"
  return response
}

export default moreOrLess
