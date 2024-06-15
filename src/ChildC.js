import React, { useContext } from 'react'
import { data, data1 } from './Parent'


function ChildC() {
    const name = useContext(data);
    const gender = useContext(data1);
    return (
        <div>
            <h1>Hi, I am {name} and my gender is {gender}</h1>
        </div>
    )
}

export default ChildC
