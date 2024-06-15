import React, { createContext } from 'react'
import ChildA from './ChildA';

const data = createContext();
const data1 = createContext();
function Parent() {
    const name = "Muskan"
    const gender = "Female"
    return (
        <div>
            <data.Provider value={name}>
                <data1.Provider value={gender}>
                    <ChildA />
                </data1.Provider>
            </data.Provider>
        </div>
    )
}

export default Parent
export { data, data1 }
