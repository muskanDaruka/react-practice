import React from 'react'

const name = "Muskan";

const displaymessage = () => {
    return "How are you Muskan"
}

function Hello() {
  return (
    <div>
      <h1>Hello World! {name} </h1>
      <h1>The message is:  {displaymessage()} </h1>
      <h1>Total is {10+20}</h1>
    </div>
  )
}
// const Hello = () => <h1>Hello There!</h1>

export default Hello
