import React from 'react'

function FunctionEvent() {
    const handleClick = () => {                         //arrow func
        console.log('Button is clicked');
    }
    // function handleClick() {
    //     console.log('Button is clicked');
    // }
  return (
    <div>
      Functional Component<br/>
      <button onClick={handleClick}>Click Here</button>
      
    </div>
  )
}

export default FunctionEvent
