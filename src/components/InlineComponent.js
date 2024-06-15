import React from 'react'

const header = {
    color: "Blue",
    fontSize: "140",
}

function InlineComponent() {
  return (
    <div>
      <h1 style={header}>This is the Inline component</h1>
    </div>
  )
}

export default InlineComponent
