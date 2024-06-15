import React from 'react'

function Profile(props) {
    // console.log(props)
    const {name, lastName} = props;    //destructure props object
    return(
    <div>
        {/* <h1> Hello {props.name} {props.lastName} </h1>
        {props.children} */}
        <h1>Hello {name} {lastName}</h1>
    </div>
    )
}

export default Profile
