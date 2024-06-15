import React, { Component } from 'react'

class ClassEvent extends Component {
    handleClick(){
        console.log('Class base event handling')
    }
  render() {
    return (
      <div>
        This is a class base component
        <button onClick = {this.handleClick}>Click</button>
      </div>
    )
  }
}
export default ClassEvent